// Local Imports
const { ERROR } = require('../../helpers/constant');
const productService = require('../services/product');
const { successResponse, errorResponse, errorResponseCatch } = require('../../helpers/response');

/**
 * @function addProduct
 * @description function to add product
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.addProduct = async (req, res) => {
    try {
        const addProduct = await productService.addProduct(req);
        if (!addProduct.error) {
            if (addProduct.success === true) {
                successResponse(res, addProduct.success, addProduct.statuscode, addProduct.message, addProduct.data);
            } else {
                errorResponse(res, addProduct.success, addProduct.statuscode, addProduct.message, addProduct.data);
            }
        } else {
            errorResponseCatch(res, addProduct.success, addProduct.statuscode, addProduct.message, addProduct.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};