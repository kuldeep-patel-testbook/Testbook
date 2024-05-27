const mongoosh = require('mongoose');

const connecDB = async () => {
    try {
        await mongoosh.connect('mongodb://localhost:27017/react_user_api');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Failed to connect MongoDB', error);
        process.exit(1);
    }
};

module.exports = connecDB;