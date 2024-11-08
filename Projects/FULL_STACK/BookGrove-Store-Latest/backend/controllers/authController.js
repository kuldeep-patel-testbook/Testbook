const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ status: 'ok', message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // const token = jwt.sign({ id: user._id }, 'thisisafullstackprogramto123004444toincludemernstackdevelopemntusingchatgpt', {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '12h',
        });

        res.status(200).json({
            status: 'ok',
            user: token,
            wishlist: user.wishlist,
            cart: user.cart,
            orders: user.orders
        });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getUserData = async (req, res) => {
    try {
        // Ensure req.user.id is correctly set by the authMiddleware
        const user = await User.findById(req.user.id)
            .populate('wishlist')
            .populate('cart.product') // Ensure 'product' field is correctly set in Cart schema
            .populate('orders');

        res.status(200).json({ status: 'ok', user });
    } catch (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

