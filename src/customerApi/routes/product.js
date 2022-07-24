// Global Imports
const router = require('express').Router();

// Local Imports
const product = require('../controllers/product');

router.get('/get-product/:id?', product.getProduct);

module.exports = router;