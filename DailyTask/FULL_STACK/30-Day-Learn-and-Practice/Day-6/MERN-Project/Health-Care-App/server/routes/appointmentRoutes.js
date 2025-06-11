const express = require("express");
const Appointment = require('../models/Appointment');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Get all appointments for logged-in doctor
router.get("/", verifyToken, async (req, res) => {
    try {
      const appointments = await Appointment.find({ doctorId: req.user }).populate("patientId");
      res.json(appointments);
    } catch (err) {
      res.status(500).json({ error: "Server Error" });
    }
});
  
// Add new appointment
router.post("/", verifyToken, async (req, res) => {
    const { patientId, date, reason } = req.body;
  
    try {
      const newAppt = new Appointment({ patientId, doctorId: req.user, date, reason });
      await newAppt.save();
      res.status(201).json(newAppt);
    } catch (err) {
      res.status(500).json({ error: "Server Error" });
    }
});
  
module.exports = router;  