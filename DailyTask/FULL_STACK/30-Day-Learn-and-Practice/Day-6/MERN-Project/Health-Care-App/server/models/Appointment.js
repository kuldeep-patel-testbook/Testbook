const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true},
  doctorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  date: { type: String, required: true },
  reason: {type: String, required: true},
  status: {type: String, default: 'Scheduled'},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
