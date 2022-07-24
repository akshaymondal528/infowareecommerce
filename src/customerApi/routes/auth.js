// Global Imports
const router = require('express').Router();

// Local Imports
const auth = require('../controllers/auth');

router.get('/register-customer', auth.registerCustomer)

module.exports = router;