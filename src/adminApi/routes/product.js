// Global Imports
const router = require('express').Router();

// Local Imports
const product = require('../controllers/product');

router.post('/add-product', product.addProduct);

module.exports = router;