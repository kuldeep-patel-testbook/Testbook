const User = require('../models/Users');
const Patient = require('../models/Patient');

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('-password');
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching doctors" });
  }
};

const getAllRadiologists = async (req, res) => {
  try {
    const radiologists = await User.find({ role: 'radiologist' }).select('-password');
    res.json(radiologists);
  } catch (err) {
    res.status(500).json({ message: "Error fetching radiologists" });
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate('createdBy', 'name email');
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: "Error fetching patients" });
  }
};

module.exports = {
  getAllDoctors,
  getAllRadiologists,
  getAllPatients
};
