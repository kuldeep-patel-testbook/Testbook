const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: true
    },
    price: {
        type: Number,
        requires: true
    },
    renewalDate: {
        type: Date,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
