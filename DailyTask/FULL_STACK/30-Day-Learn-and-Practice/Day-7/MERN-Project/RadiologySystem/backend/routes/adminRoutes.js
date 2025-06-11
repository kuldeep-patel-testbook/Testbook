const express = require('express');
const router = express.Router();
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const {
  getAllDoctors,
  getAllRadiologists,
  getAllPatients
} = require('../controllers/adminController');

// Only admins can access these routes
router.get('/doctors', verifyToken, checkRole('admin'), getAllDoctors);
router.get('/radiologists', verifyToken, checkRole('admin'), getAllRadiologists);
router.get('/patients', verifyToken, checkRole('admin'), getAllPatients);

module.exports = router;
