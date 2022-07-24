require('dotenv').config();

exports.DB_CREDENTIALS = {
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017',
    DB_NAME: process.env.DB_NAME || 'eCommerce'
};

exports.CONST_CREDENTIALS = {
    PORT: process.env.PORT || 5151,
    ADMIN_API_ROUTR_PREFIX: process.env.API_ROUTR_PREFIX || '/api/v1/admin',
    CUSTOMER_API_ROUTR_PREFIX: process.env.API_ROUTR_PREFIX || '/api/v1/customer',
    AUTH_SECRET: process.env.AUTH_SECRET
}