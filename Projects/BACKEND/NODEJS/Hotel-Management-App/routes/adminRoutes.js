const { Router } = require('express');
const adminController = require('../controllers/adminController');
const { requireAuth, checkAdmin } = require('../middleware/authMiddleware');
const router = Router();


router.get('/admin', requireAuth, checkAdmin, adminController.admin);
router.post('/hotels-with-rooms', requireAuth, adminController.addHotelWithRooms);
router.post('/addhotelPost', requireAuth, checkAdmin, adminController.addhotelPost);
router.get('/hotels-with-rooms', requireAuth, checkAdmin, adminController.addhotel);
router.delete('/admin/delete-hotel/:id', requireAuth, checkAdmin, adminController.delete_hotel);
router.delete('/admin/delete-room/:id', requireAuth, checkAdmin, adminController.delete_room);

router.get('/hotels', requireAuth, checkAdmin, adminController.getHotels);
router.get('/edit/:id', requireAuth, checkAdmin, adminController.editHotel);
router.post('/edit/:id', requireAuth, checkAdmin, adminController.editHotelPost);
router.post('/delete/:id', requireAuth, checkAdmin, adminController.deleteHotel);

module.exports = router;