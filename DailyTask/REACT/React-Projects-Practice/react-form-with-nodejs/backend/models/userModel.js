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
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true
    },
    address: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    user_role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});

const userInfo = new mongoose.model('UserInfo', userSchema);
module.exports = userInfo;