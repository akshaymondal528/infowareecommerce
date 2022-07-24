// Global Imports
const router = require('express').Router();

// Local Imports
const customer = require('../controllers/customer');
const { upload } = require('../../utils/multer')

const uploadDir = 'customer';

router.get('/get-customer', customer.getCustomer);
router.post('/update-customer', upload(uploadDir).single('image'), customer.updateCustomer);
router.get('/delete-customer', customer.deleteCustomer);

module.exports = router;