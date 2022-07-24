// Local Imports
const { CONST_CREDENTIALS } = require('../../config/env')
const auth = require('./auth');

const customerRoutePrefix = CONST_CREDENTIALS.CUSTOMER_API_ROUTR_PREFIX;

exports.customerRoute = (app) => {
    app.use(customerRoutePrefix, auth);
};