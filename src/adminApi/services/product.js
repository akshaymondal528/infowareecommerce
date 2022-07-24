// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');
const productModel = require('../../models/product')

/**
 * @function addProduct
 * @description function to add product
 * @author Akshay Mondal
 */
exports.addProduct = async (req) => {
    try {
        const { type, brand, sizes, colors, price } = req.body;
        const addProduct = await productModel.create({ type, brand, sizes, colors, price });
        if (!addProduct) return ERROR.ADMIN.PRODUCT_NOT_ADD;
        SUCCESS.ADMIN.ADD_PRODUCT.data = addProduct;
        return SUCCESS.ADMIN.ADD_PRODUCT;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}