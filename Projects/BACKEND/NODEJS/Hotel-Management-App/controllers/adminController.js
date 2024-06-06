const Hotel = require('../models/Hotels');
const Room = require('../models/Rooms');
const jwt = require('jsonwebtoken');

const admin = (req, res) => {
    const isLoggedIn = !!req.cookies.jwt;
    res.render('admin', { isLoggedIn });
};

const addhotel = (req, res) => {
    const isLoggedIn = !!req.cookies.jwt;
    res.render('addhotel', { isLoggedIn });
};

const addhotelPost = async (req, res) => {
    try {
        const { name, location, price, image, description, rooms } = req.body;
    
        // Create a new hotel
        const hotel = new Hotel({
          name: name,
          location: location,
          price: price,
          image: image,
          description: description
        });

        const roomsArray = Array.isArray(rooms) ? rooms : [rooms];
        // Create and associate rooms with the hotel
        for (let room of roomsArray) {
            const roomData = {
                number: room.number,
                type: room.type,
                price: room.price
            };
            const newRoom = new Room(roomData);
            hotel.rooms.push(newRoom);
            await newRoom.save();
        }
    
        // Save the hotel
        await hotel.save();

        console.log(`Hotel and rooms added successfully!`);
        const isLoggedIn = !!req.cookies.jwt;
        res.render('admin', { isLoggedIn } );   
      } catch (error) {
        res.status(500).send('Error adding hotel and rooms: ' + error.message);
      }
};

const addHotelWithRooms = async (req, res) => {
    const hotelsData = req.body;
    try {
        const hotelPromises = hotelsData.map(async (hotelData) => {
            const { rooms, ...hotelDetails } = hotelData;

            const hotel = new Hotel(hotelDetails); // Create hotel
            await hotel.save();

            const roomPromises = rooms.map(async (roomData) => {
                const room = new Room({ ...roomData, hotel: hotel._id }); // Create rooms
                await room.save();
                hotel.rooms.push(room._id);
            });

            await Promise.all(roomPromises); // Wait for all rooms to be created

            await hotel.save(); // Save the hotel again with the rooms

            return hotel;
        });

        const addedHotels = await Promise.all(hotelPromises);
        console.log(`hotels and rooms added successfully`);
        res.status(201).json({ message: 'hotels and rooms added successfully', hotels: addedHotels });
    } catch (error) {
        console.log(`hotel not added error like ${error.message}`);
        res.status(400).json({ error: error.message });
    }
};

const delete_hotel = async (req, res) => {
    const { id } = req.params;
    try {
        await Hotel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Hotel deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const delete_room  = async (req, res) => {
    const { id } = req.params;
    try {
        await Room.findByIdAndDelete(id);
        res.status(200).json({ message: 'Room deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find().populate('rooms');
        const isLoggedIn = !!req.cookies.jwt;
        res.render('hotels', { isLoggedIn, hotels });
      } catch (error) {
        res.status(500).send('Error fetching hotels: ' + error.message);
    }

};
const editHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id).populate('rooms');
        const isLoggedIn = !!req.cookies.jwt;
        res.render('edit_hotel', { hotel, isLoggedIn });
    } catch (error) {
    res.status(500).send('Error fetching hotel: ' + error.message);
    }
};
const editHotelPost = async (req, res) => {
    try {
      const { name, location, price, image, description, rooms } = req.body;
      const hotels = await Hotel.findById(req.params.id);
  
      hotels.name = name;
      hotels.location = location;
      hotels.price = price;
      hotels.image = image;
      hotels.description = description;
  
      if (rooms) {
        const roomsArray = Array.isArray(rooms) ? rooms : [rooms];
        hotels.rooms = [];
        for (let room of roomsArray) {
          const roomData = { number: room.number, type: room.type, price: room.price };
          const newRoom = new Room(roomData);
          hotels.rooms.push(newRoom);
          await newRoom.save();
        }
      }
  
      await hotels.save();
      res.redirect('/hotels');
    } catch (error) {
      res.status(500).send('Error editing hotel: ' + error.message);
    }
};

const deleteHotel = async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.redirect('/hotels');
    } catch (error) {
      res.status(500).send('Error deleting hotel: ' + error.message);
    }
};

module.exports = { admin, addHotelWithRooms, delete_hotel, delete_room, addhotel, addhotelPost, getHotels, editHotel, editHotelPost, deleteHotel };