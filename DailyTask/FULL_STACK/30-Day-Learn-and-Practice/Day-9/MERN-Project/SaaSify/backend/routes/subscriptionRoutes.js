const express = require('express');
const { getSubscriptions, addSubscription, updateSubscription, deleteSubscription } = require('../controllers/subscriptionController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getSubscriptions);
router.post('/', auth, addSubscription);
router.put('/:id', auth, updateSubscription);
router.delete('/:id', auth, deleteSubscription);

module.exports = router;