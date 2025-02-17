const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    },
    address: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true,
    },
    user_role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});

const userInfo = new mongoose.model('userinfo', userSchema);
module.exports = userInfo;