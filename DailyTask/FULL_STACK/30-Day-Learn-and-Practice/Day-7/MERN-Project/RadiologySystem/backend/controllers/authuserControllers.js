const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExist = await Users.findOne({ email });
        if (userExist) return res.status(400).json({ message: 'Doctor already exists' });

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({ name, email, password: hashPassword });
        await newUser.save();
        res.status(201).json({ message: "Doctor registered successfully" });
    } catch (error) {
        console.error("Register Error:", error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { registerUser, loginUser };