// Global Imports
const router = require('express').Router();

// Local Imports
const auth = require('../controllers/auth');
const { upload } = require('../../utils/multer')

const uploadDir = 'customer'

router.post('/register-customer', upload(uploadDir).single('image'), auth.registerCustomer);
router.post('/login-customer', auth.loginCustomer);

module.exports = router;