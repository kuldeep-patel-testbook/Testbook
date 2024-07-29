const mongoose = require('mongoose');

const connectDB = async()=> {
    try {
        await mongoose.connect('mongodb://localhost:27017/medicine_api');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;