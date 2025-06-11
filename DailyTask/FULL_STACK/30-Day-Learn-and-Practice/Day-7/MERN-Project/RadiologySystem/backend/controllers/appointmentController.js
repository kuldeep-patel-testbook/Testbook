const Appointment = require('../models/Appointment');

const createAppointment = async (req, res) => {
  const { patient, doctor, date, reason } = req.body;
  try {
    const newAppt = await Appointment.create({ patient, doctor, date, reason });
    res.status(201).json(newAppt);
  } catch (err) {
    res.status(500).json({ message: "Error scheduling appointment", error: err.message });
  }
};

const getAppointmentsForUser = async (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;

  try {
    let filter = {};
    if (role === 'doctor') filter.doctor = userId;
    else if (role === 'patient') filter.patient = userId;

    const appointments = await Appointment.find(filter)
      .populate('patient', 'name')
      .populate('doctor', 'name email');

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching appointments", error: err.message });
  }
};

module.exports = {
  createAppointment,
  getAppointmentsForUser
};
