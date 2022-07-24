// Global Imports
const router = require('express').Router();

// Local Imports
const auth = require('../controllers/auth');

router.post('/register-admin', auth.registerAdmin);
router.post('/login-admin', auth.loginAdmin);

module.exports = router;