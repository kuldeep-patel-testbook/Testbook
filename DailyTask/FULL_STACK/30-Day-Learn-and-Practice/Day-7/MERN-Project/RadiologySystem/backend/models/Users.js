const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role :{
        type: String,
        enum : ["admin", "doctor", "radiologist"],
        default: "doctor"
    }
}, {timestamps: true});

const users = mongoose.model('users', userSchema);
module.exports = users;