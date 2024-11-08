const express = require('express');
const router = express.Router();
const { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct,
    getNewArrivalProducts
} = require('../controllers/productController');

router.post('/products/add', createProduct);
router.get('/home/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/home/newarrivals', getNewArrivalProducts);

module.exports = router;
