const express = require('express');
const Patient = require('../models/patient');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Get all patients for a doctor
router.get('/', verifyToken, async (req, res) => {

    try {
        const patients = await Patient.find();
        res.json({patients});

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
    //res.json(patients);
});

// Add a Patient
router.post('/', verifyToken, async (req, res) => {
    const {name, age, gender, disease} = req.body;
    try {
        const newPatient = new Patient({name, age, gender, disease, doctorId: req.user});
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Update patient
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updated = await Patient.findByIdAndUpdate({_id: req.params.id, doctorId: req.user}, req.body, {new: true});
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete patient

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Patient.findByIdAndDelete({_id: req.params.id, doctorId: req.user});
        res.json({ message: "deleted" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;