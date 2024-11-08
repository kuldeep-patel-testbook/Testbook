const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    author: { type: String, required: true },
    discountedPrice: { type: Number, required: true },
    category: { type: String, required: true },
    imgSrc: { type: String, required: true },
    imgAlt: { type: String },
    description: { type: String },
    rating: { type: String },
    stock: { type: Number, required: true },
    badgeText: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
