const express = require('express');
const router = express.Router();
const { signup, login, getUserData } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authMiddleware, getUserData);

module.exports = router;