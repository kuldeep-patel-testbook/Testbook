const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ message: "Doctor already exists" });

        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: "Doctor registered successfully" });

    } catch (error) {
        console.error("Register Error:", error)
        return res.status(500).json({ message: "Internal Server Error" });

    }
});

//Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Doctor not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.json({ token });

    } catch (error) {
        console.error("Login Error", error);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

module.exports = router;