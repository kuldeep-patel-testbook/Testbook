const Patient = require('../models/Patient');

// Create a Patient
const createPatient = async (req, res) => {
    try {
        const newPatient = new Patient({ ...req.body, createdBy: req.user.id });
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        console.log("Creating Patient Error=>", error);
        res.status(500).json({ message: 'Error creating patient', error: error.message });
    }
};

// Get All Patients
const getAllPatient = async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;

    const query = {
        name: { $regex: search, $options: 'i' }, // case-insensitive search by name
    };
    try {
        const patients = await Patient.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .populate('createdBy', 'name');

        const total = await Patient.countDocuments(query);

        res.json({
            data: patients,
            total,
            page: parseInt(page),
            limit: parseInt(limit)
        });

    } catch (error) {
        console.log("Error fetching patient=>", error);
        res.status(500).json({ message: 'Error fetching patient', error: error.message });
    }
};

// Update Patient Data
const updatePatient = async (req, res) => {
    try {
        const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        console.log("Error updating patient=>", error);
        res.status(500).json({ message: 'Error updating patient', error: error.message });
    }
};

// Delete Patient
const deletePatient = async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.json({ message: 'Patient record deleted successfully' });
    } catch (error) {
        console.log("Error deleting patient=>", error);
        res.status(500).json({ message: 'Error deleting patient', error: error.message });
    }
};

module.exports = { createPatient, getAllPatient, updatePatient, deletePatient };