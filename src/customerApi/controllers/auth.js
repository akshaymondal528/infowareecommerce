// Local Imports
const { ERROR } = require('../../helpers/constant');
const authService = require('../services/auth');
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');

/**
 * @function registerCustomer
 * @description function to register admin
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.registerCustomer = async (req, res) => {
    try {
        const registerCustomer = await authService.registerCustomer(req);
        if (!registerCustomer.error) {
            if (registerCustomer.success === true) {
                successResponse(res, registerCustomer.success, registerCustomer.statuscode, registerCustomer.message, registerCustomer.data);
            } else {
                errorResponse(res, registerCustomer.success, registerCustomer.statuscode, registerCustomer.message, registerCustomer.data);
            }
        } else {
            errorResponseCatch(res, registerCustomer.success, registerCustomer.statuscode, registerCustomer.message, registerCustomer.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};