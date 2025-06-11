const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const Report = require('../models/Report'); // if you created a Report model

const getDashboardStats = async (req, res) => {
  try {
    const totalPatients = await Patient.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    const totalReports = await Report.countDocuments();

    res.json({
      totalPatients,
      totalAppointments,
      totalReports,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch dashboard stats', error: err.message });
  }
};

const getDoctorDashboard = async (req, res) => {
  try {
    const totalPatients = await Patient.countDocuments({ createdBy: req.user.id });
    const reports = await Report.find({}).populate('patient');

    // Get reports for this doctor's patients
    const doctorPatientIds = await Patient.find({ createdBy: req.user.id }).select('_id');
    const doctorPatientIdsList = doctorPatientIds.map(p => p._id);
    const doctorReports = await Report.countDocuments({ patient: { $in: doctorPatientIdsList } });

    res.json({
      role: 'doctor',
      totalPatients,
      totalReports: doctorReports
    });
  } catch (err) {
    console.error("Doctor Dashboard Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getRadiologistDashboard = async (req, res) => {
  try {
    const totalReports = await Report.countDocuments({ uploadedBy: req.user.id });

    // Recent 5 reports with patient info
    const recentReports = await Report.find({ uploadedBy: req.user.id })
      .populate('patient', 'name')
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      role: 'radiologist',
      totalReports,
      recentReports
    });
  } catch (err) {
    console.error("Radiologist Dashboard Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getDashboardStats,
  getDoctorDashboard,
  getRadiologistDashboard
};
