const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        requires: true
    },
    price: {
        type:Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    }
});

module.exports = mongoose.model('Room', roomSchema);