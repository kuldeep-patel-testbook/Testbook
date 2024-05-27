const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    }
});
UserSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('NewUser', UserSchema);