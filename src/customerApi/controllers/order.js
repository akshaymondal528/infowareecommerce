// Local Imports
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');
const { ERROR } = require('../../helpers/constant');
const orderService = require('../services/order');

/**
 * @function addOrder
 * @description function to add order
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.addOrder = async (req, res) => {
    try {
        const addOrder = await orderService.addOrder(req);
        if (!addOrder.error) {
            if (addOrder.success === true) {
                successResponse(res, addOrder.success, addOrder.statuscode, addOrder.message, addOrder.data);
            } else {
                errorResponse(res, addOrder.success, addOrder.statuscode, addOrder.message, addOrder.data);
            }
        } else {
            errorResponseCatch(res, addOrder.success, addOrder.statuscode, addOrder.message, addOrder.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function getOrder
 * @description function to get order
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getOrder = async (req, res) => {
    try {
        const getOrder = await orderService.getOrder(req);
        if (!getOrder.error) {
            if (getOrder.success === true) {
                successResponse(res, getOrder.success, getOrder.statuscode, getOrder.message, getOrder.data);
            } else {
                errorResponse(res, getOrder.success, getOrder.statuscode, getOrder.message, getOrder.data);
            }
        } else {
            errorResponseCatch(res, getOrder.success, getOrder.statuscode, getOrder.message, getOrder.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};