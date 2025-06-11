const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum : ['male', 'female', 'other']
    },
    contact:{
        type: String,
        required: true
    },
    email: String,
    address: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('patients', patientSchema);
