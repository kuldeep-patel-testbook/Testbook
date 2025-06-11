const express = require('express');
const router = express.Router();
const users = require('../users');

// Register User
router.post('/register', (req, res) => {
    try {
        const { name, email } = req.body;
        const exists = users.find(u => u.email === email);
        if (exists) return res.status(400).json({ message: "User already exists" });
        users.push({ name, email });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
       res.status(500).json({message: 'Internal server error'}); 
    }
});

router.get('/getuser', (req,res) => {
    try {
        res.status(201).json({users});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'}); 
    }
});

router.post('/login', (req, res) => {
    try {
        const {email} = req.body;
        const user = users.find(u => u.email === email);
        if(!user) return res.status(400).json({message: "User not found"});
        res.json({message: "Login Successful", user});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'}); 
    }
});

module.exports = router;