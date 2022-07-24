// Global Imports
const router = require('express').Router();

// Local Imports
const order = require('../controllers/order');

router.post('/add-order', order.addOrder);
router.get('/get-order/:id?', order.getOrder);

module.exports = router;