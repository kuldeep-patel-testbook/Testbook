const express = require('express');
const router = express.Router();
const { addToCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add an item to the cart
router.post('/cart', authMiddleware, addToCart);

module.exports = router;
