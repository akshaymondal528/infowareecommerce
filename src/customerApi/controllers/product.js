// Local Imports
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');
const { ERROR } = require('../../helpers/constant');
const productService = require('../services/product');

/**
 * @function getProduct
 * @description function to get customer
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getProduct = async (req, res) => {
    try {
        const getProduct = await productService.getProduct(req);
        if (!getProduct.error) {
            if (getProduct.success === true) {
                successResponse(res, getProduct.success, getProduct.statuscode, getProduct.message, getProduct.data);
            } else {
                errorResponse(res, getProduct.success, getProduct.statuscode, getProduct.message, getProduct.data);
            }
        } else {
            errorResponseCatch(res, getProduct.success, getProduct.statuscode, getProduct.message, getProduct.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};