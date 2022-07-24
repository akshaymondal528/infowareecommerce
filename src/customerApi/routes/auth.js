// Global Imports
const router = require('express').Router();

// Local Imports
const auth = require('../controllers/auth');
const { upload } = require('../../utils/multer')

router.post('/register-customer', upload.single('image'), auth.registerCustomer);
router.post('/login-customer', auth.loginCustomer);

module.exports = router;