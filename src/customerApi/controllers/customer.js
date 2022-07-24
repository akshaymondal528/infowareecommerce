// Local Imports
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');
const { ERROR } = require('../../helpers/constant');
const customerService = require('../services/customer');

/**
 * @function getCustomer
 * @description function to get customer
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getCustomer = async (req, res) => {
    try {
        const getCustomer = await customerService.getCustomer(req);
        if (!getCustomer.error) {
            if (getCustomer.success === true) {
                successResponse(res, getCustomer.success, getCustomer.statuscode, getCustomer.message, getCustomer.data);
            } else {
                errorResponse(res, getCustomer.success, getCustomer.statuscode, getCustomer.message, getCustomer.data);
            }
        } else {
            errorResponseCatch(res, getCustomer.success, getCustomer.statuscode, getCustomer.message, getCustomer.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function updateCustomer
 * @description function to update customer
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.updateCustomer = async (req, res) => {
    try {
        const updateCustomer = await customerService.updateCustomer(req);
        if (!updateCustomer.error) {
            if (updateCustomer.success === true) {
                successResponse(res, updateCustomer.success, updateCustomer.statuscode, updateCustomer.message, updateCustomer.data);
            } else {
                errorResponse(res, updateCustomer.success, updateCustomer.statuscode, updateCustomer.message, updateCustomer.data);
            }
        } else {
            errorResponseCatch(res, updateCustomer.success, updateCustomer.statuscode, updateCustomer.message, updateCustomer.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function deleteCustomer
 * @description function to delete customer
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.deleteCustomer = async (req, res) => {
    try {
        const deleteCustomer = await customerService.deleteCustomer(req);
        if (!deleteCustomer.error) {
            if (deleteCustomer.success === true) {
                successResponse(res, deleteCustomer.success, deleteCustomer.statuscode, deleteCustomer.message, deleteCustomer.data);
            } else {
                errorResponse(res, deleteCustomer.success, deleteCustomer.statuscode, deleteCustomer.message, deleteCustomer.data);
            }
        } else {
            errorResponseCatch(res, deleteCustomer.success, deleteCustomer.statuscode, deleteCustomer.message, deleteCustomer.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};