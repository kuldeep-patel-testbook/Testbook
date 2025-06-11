const express = require('express');
const router = express.Router();
const {createPatient, getAllPatient, updatePatient, deletePatient} = require('../controllers/patientControllers');
const {verifyToken} = require('../middleware/authMiddleware');

router
.post('/', verifyToken, createPatient)
.get('/', verifyToken, getAllPatient)
.put('/:id', verifyToken, updatePatient)
.delete('/:id', verifyToken, deletePatient);

module.exports = router;