// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');
const productModel = require('../../models/product');

/**
 * @function getProduct
 * @description function to get customer
 * @param (req)
 * @author Akshay Mondal
 */
exports.getProduct = async (req) => {
    try {
        let obj = {}
        if (req.params.id && req.params.id !== '') obj._id = req.params.id;
        if (req.query.productId && req.query.productId !== '') obj._id = req.query.productId;
        let getProduct = await productModel.find(obj);
        if (getProduct.length === 0) return ERROR.PRODUCT_NOT_FOUND;
        SUCCESS.GET_PRODUCT.data = getProduct;
        return SUCCESS.GET_PRODUCT;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}