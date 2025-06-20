const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/users', async (req, res) => {

    try {
        const { name, email } = req.body;
        const newUser = User.create({name, email});
        res.status(201).json({message: 'user created', user: newUser})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});


// router.post('/users', (req, res) => {
//     const {name, email} = req.body;

//     User.create(name, email, (err, result) => {
//         if(err) return res.status(500).json({error: err.message});
//         res.json({message: 'User created successfully', id: result.insertId});
//     });
// });

module.exports = router;