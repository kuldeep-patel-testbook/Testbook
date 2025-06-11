const express = require('express');
const router = express.Router();
const multer = require('multer');
const { verifyToken } = require('../middleware/authMiddleware');
const { uploadReport, getReportsByPatient } = require('../controllers/reportControllers');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/upload', verifyToken, upload.single('file'), uploadReport);

router.get('/patient/:patientId', verifyToken, getReportsByPatient);

module.exports = router;
