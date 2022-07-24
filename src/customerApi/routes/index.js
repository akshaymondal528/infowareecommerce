// Local Imports
const { CONST_CREDENTIALS } = require('../../config/env');
const { customerCheckToken } = require('../../middlewares/checkToken')
const auth = require('./auth');
const customer = require('./customer');
const product = require('./product');
const order = require('./order');

const customerRoutePrefix = CONST_CREDENTIALS.CUSTOMER_API_ROUTR_PREFIX;

exports.customerRoute = (app) => {
    app.use(customerRoutePrefix, auth);
    app.use(customerRoutePrefix, customerCheckToken, customer);
    app.use(customerRoutePrefix, customerCheckToken, product);
    app.use(customerRoutePrefix, customerCheckToken, order);
};