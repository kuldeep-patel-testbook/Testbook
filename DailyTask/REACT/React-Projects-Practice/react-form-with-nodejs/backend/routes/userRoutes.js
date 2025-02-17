const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

router.get('/userlist', userController.getUser);
router.post('/addUser', userController.addUser);
router.put('/userlist/:id', userController.editUser);
router.delete('/userlist/:id', userController.deleteUser);

module.exports = router;