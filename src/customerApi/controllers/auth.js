// Local Imports
const { ERROR } = require('../../helpers/constant');
const authService = require('../services/auth');
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');

/**
 * @function registerCustomer
 * @description function to register customer
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

/**
 * @function loginCustomer
 * @description function to login customer
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.loginCustomer = async (req, res) => {
    try {
        const loginCustomer = await authService.loginCustomer(req);
        if (!loginCustomer.error) {
            if (loginCustomer.success === true) {
                successResponse(res, loginCustomer.success, loginCustomer.statuscode, loginCustomer.message, loginCustomer.data);
            } else {
                errorResponse(res, loginCustomer.success, loginCustomer.statuscode, loginCustomer.message, loginCustomer.data);
            }
        } else {
            errorResponseCatch(res, loginCustomer.success, loginCustomer.statuscode, loginCustomer.message, loginCustomer.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};