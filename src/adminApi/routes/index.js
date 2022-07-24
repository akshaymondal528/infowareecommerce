// Local Imports
const { CONST_CREDENTIALS } = require('../../config/env')
const auth = require('./auth');

const adminRoutePrefix = CONST_CREDENTIALS.ADMIN_API_ROUTR_PREFIX;

exports.adminRoute = (app) => {
    app.use(adminRoutePrefix, auth);
};