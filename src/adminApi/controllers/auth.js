// Local Imports
const { ERROR } = require('../../helpers/constant');
const authService = require('../services/auth');
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');

/**
 * @function registerAdmin
 * @description function to register admin
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.registerAdmin = async (req, res) => {
    try {
        const registerAdmin = await authService.registerAdmin(req);
        if (!registerAdmin.error) {
            if (registerAdmin.success === true) {
                successResponse(res, registerAdmin.success, registerAdmin.statuscode, registerAdmin.message, registerAdmin.data);
            } else {
                errorResponse(res, registerAdmin.success, registerAdmin.statuscode, registerAdmin.message, registerAdmin.data);
            }
        } else {
            errorResponseCatch(res, registerAdmin.success, registerAdmin.statuscode, registerAdmin.message, registerAdmin.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function loginAdmin
 * @description function to register admin
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.loginAdmin = async (req, res) => {
    try {
        const loginAdmin = await authService.loginAdmin(req);
        if (!loginAdmin.error) {
            if (loginAdmin.success === true) {
                successResponse(res, loginAdmin.success, loginAdmin.statuscode, loginAdmin.message, loginAdmin.data);
            } else {
                errorResponse(res, loginAdmin.success, loginAdmin.statuscode, loginAdmin.message, loginAdmin.data);
            }
        } else {
            errorResponseCatch(res, loginAdmin.success, loginAdmin.statuscode, loginAdmin.message, loginAdmin.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};