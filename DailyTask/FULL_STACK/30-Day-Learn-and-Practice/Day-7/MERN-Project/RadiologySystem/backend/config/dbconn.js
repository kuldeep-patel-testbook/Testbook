const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}radiology-system-app`);
        console.log('Database connecting successful');
    } catch (error) {
        console.error(`Database connection issue - ${error}`);
        process.exit(1);
    }
};

module.exports = connectDB;