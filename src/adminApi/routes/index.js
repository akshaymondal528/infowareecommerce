// Local Imports
const { CONST_CREDENTIALS } = require('../../config/env');
const { adminCheckToken } = require('../../middlewares/checkToken')
const auth = require('./auth');
const product = require('./product');

const adminRoutePrefix = CONST_CREDENTIALS.ADMIN_API_ROUTR_PREFIX;

exports.adminRoute = (app) => {
    app.use(adminRoutePrefix, auth);
    app.use(adminRoutePrefix, adminCheckToken, product);
};