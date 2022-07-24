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