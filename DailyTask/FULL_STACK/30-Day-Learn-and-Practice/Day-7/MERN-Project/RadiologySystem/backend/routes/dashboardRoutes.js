const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getDoctorDashboard, getRadiologistDashboard} = require('../controllers/dashboardController');

// Role-based routes
router.get('/doctor', verifyToken, getDoctorDashboard);
router.get('/radiologist', verifyToken, getRadiologistDashboard);
module.exports = router;
