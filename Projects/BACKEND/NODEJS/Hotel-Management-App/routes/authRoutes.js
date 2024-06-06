const {Router} = require('express');
const authController = require('../controllers/authController');
const { checkAdmin } = require('../middleware/authMiddleware');

const router = Router();

router.get('/signup', authController.signup);
router.get('/login', authController.login);
router.get('/adminlogin', authController.adminlogin);
router.post('/signup', authController.signupPost);
router.post('/login', authController.loginPost);
router.get('/logout', authController.logout);
router.get('/contact', authController.contact);
module.exports = router;