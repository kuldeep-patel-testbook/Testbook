const { Router } = require('express');
const hotelController = require('../controllers/hotelController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/', hotelController.home);
router.get('/listings', requireAuth, hotelController.hotelListing);
router.get('/hotel/:id', requireAuth, hotelController.hotels);
router.get('/booking/:id', requireAuth, hotelController.bookings);
router.post('/search', hotelController.searchHotels);

module.exports = router;