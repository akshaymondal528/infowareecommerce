// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');
const productModel = require('../../models/product');
const orderModel = require('../../models/order');
const { mongo, default: mongoose } = require('mongoose');

/**
 * @function addOrder
 * @description function to add order
 * @param (req)
 * @author Akshay Mondal
 */
exports.addOrder = async (req) => {
    try {
        const { productId, paymentType } = req.body;
        const productData = await productModel.find({ _id: productId });
        const addOrder = await orderModel.create({
            productId,
            customerId: req.customer._id,
            price: productData[0].price,
            paymentType
        })
        if (!addOrder) return ERROR.ORDER_NOT_ADD;
        SUCCESS.ADD_ORDER.data = addOrder;
        return SUCCESS.ADD_ORDER;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function getOrder
 * @description function to get order
 * @param (req)
 * @author Akshay Mondal
 */
exports.getOrder = async (req) => {
    try {
        let aggPipe = [];
        if (req.params.id && req.params.id !== '') {
            aggPipe.push({
                $match: {
                    _id: mongoose.Types.ObjectId(req.params.id)
                }
            });
        }
        if (req.customer._id) {
            aggPipe.push({
                $match: {
                    customerId: mongoose.Types.ObjectId(req.customer._id)
                }
            });
        }
        if (req.query.productId && req.query.productId !== '') {
            aggPipe.push({
                $match: {
                    productId: mongoose.Types.ObjectId(req.query.productId)
                }
            });
        }
        aggPipe.push({
            $lookup: {
                from: 'products',
                localField: 'productId',
                foreignField: '_id',
                as: 'product'
            }
        });
        aggPipe.push({
            $unwind: {
                path: '$product'
            }
        });
        const getOrder = await orderModel.aggregate(aggPipe);
        SUCCESS.ADD_ORDER.data = getOrder;
        return SUCCESS.ADD_ORDER;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}