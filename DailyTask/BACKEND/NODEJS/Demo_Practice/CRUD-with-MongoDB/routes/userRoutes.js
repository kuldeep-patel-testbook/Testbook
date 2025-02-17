const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.get('/userlist', userController.userList);
router.get('/signup', userController.signup);
router.post('/signup', userController.signupPost);

router.get('/edituser/:id', userController.editUser);
router.put('/edituser/:id', userController.editUserPost);

router.delete('/deleteuser/:id', userController.deleteuser);

module.exports = router;