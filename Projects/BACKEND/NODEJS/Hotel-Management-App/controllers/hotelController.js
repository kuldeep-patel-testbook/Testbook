const Hotel = require('../models/Hotels');
const Room = require('../models/Rooms');
const jwt = require('jsonwebtoken');

const home = async (req, res) => {
    try {
        const hotels = await Hotel.find().limit(9);
        console.log(`hotels find=> ${hotels}`);
        const isLoggedIn = !!req.cookies.jwt;
        res.render('index', { hotels, isLoggedIn } );
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(400).json({ error: error.message });
        }
    }
};

const hotelListing = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        // console.log(`hotels find=> ${hotels}`);
        const isLoggedIn = !!req.cookies.jwt;
        res.render('listings', { hotels, isLoggedIn } );
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(400).json({ error: error.message });
        }
    }
};

const hotels = async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findById(id).populate('rooms');
        const isLoggedIn = !!req.cookies.jwt;
        res.render('property', { hotel, isLoggedIn });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(400).json({ error: error.message });
        }
    }
};

const bookings = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await Room.findById(id).populate('hotel');
        const isLoggedIn = !!req.cookies.jwt;
        res.render('booking', { room, isLoggedIn });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(400).json({ error: error.message });
        }
    }
};

const searchHotels = async (req, res) => {
    const { location, dateRange, guests } = req.body;
    try {
        const hotels = await Hotel.find({ location });
        const isLoggedIn = !!req.cookies.jwt;
        res.render('index', { hotels, isLoggedIn });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = { home, hotels, bookings, searchHotels, hotelListing};