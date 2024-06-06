const mongoose = require('mongoose');
const rootConfig = require('../rootConfig');

const dbConnection = async() => {
    mongoose.connect(rootConfig.dbURI, {
        serverSelectionTimeoutMS: 30000 // Increase the timeout to 30 seconds
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
};
   
module.exports = dbConnection;