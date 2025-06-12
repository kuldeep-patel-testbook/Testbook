const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashPassword });
        console.log("saasasasas");
        res.status(201).json({ message: 'User Registered', user: user.email });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token });

    } catch (error) {
        res.status(400).json({ message: 'Error login failed', error: error.message });
    }
};

module.exports = { register, login };