// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');

/**
 * @function registerCustomer
 * @description function to register admin
 * @param (req)
 * @author Akshay Mondal
 */
exports.registerCustomer = async (req) => {
    try {
        SUCCESS.CUSTOMER.REGISTRATION.data = {};
        return SUCCESS.CUSTOMER.REGISTRATION;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}