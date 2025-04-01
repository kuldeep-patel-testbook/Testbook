const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const {name, email, password, contact} = req.body;
        const newUser = new User({name, email, password, contact});
        if(!newUser){
            return res.status(400).json({message: 'Register user error'});
        }
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({ status:'Internal server Error', message: error.message});
    }
});

router.get('/getuser', async (req, res) => {
    try {
        const allUser = await User.find();
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/getuser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({message: "User not found"});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.put('/edituser/:id', async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateUser) return res.status(404).json({ message: "User not found"});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if(!deleteUser) return res.status(404).json({message: "User not found"});
        res.status(201).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;