// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');

/**
 * @function registerAdmin
 * @description function to register admin
 * @param (req)
 * @author Akshay Mondal
 */
exports.registerAdmin = async (req) => {
    try {
        SUCCESS.ADMIN.REGISTRATION.data = {};
        return SUCCESS.ADMIN.REGISTRATION;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}