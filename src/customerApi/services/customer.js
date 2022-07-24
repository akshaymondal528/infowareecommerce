// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');
const { CONST_CREDENTIALS } = require('../../config/env');
const { fileUnlik } = require('../../utils/fileUnlink');
const customerModel = require('../../models/customer');

/**
 * @function getCustomer
 * @description function to get customer
 * @param (req)
 * @author Akshay Mondal
 */
exports.getCustomer = async (req) => {
    try {
        let getCustomer = await customerModel.findOne({ _id: req.customer._id });
        if (!getCustomer) return ERROR.CUSTOMER.CUSTOMER_NOT_FOUND;
        let { password, authKey, ...rest } = getCustomer._doc
        SUCCESS.CUSTOMER.GET_CUSTOMER.data = rest;
        rest.image = `${CONST_CREDENTIALS.BASE_URL}${rest.image}`;
        return SUCCESS.CUSTOMER.GET_CUSTOMER;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function updateCustomer
 * @description function to update customer
 * @param (req)
 * @author Akshay Mondal
 */
exports.updateCustomer = async (req) => {
    try {
        if (req.body.email) return ERROR.CUSTOMER.CAN_NOT_UPDATE_EMAIL;
        const customerData = await customerModel.findOne({ _id: req.customer._id });
        let filePath;
        if (req.body.userName) {
            const findUserByUserName = await customerModel.findOne({ userName: req.body.userName });
            if (findUserByUserName && findUserByUserName !== {}) {
                if (req.file) filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`
                fileUnlik(filePath);
                return ERROR.USERNAME_EXIST;
            }
        }
        if (req.body.mobile) {
            const findUserByMobile = await customerModel.findOne({ mobile: req.body.mobile });
            if (findUserByMobile && findUserByMobile !== {}) {
                if (req.file) filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`
                fileUnlik(filePath);
                return ERROR.MOBILE_EXIST;
            }
        }
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashPassword;
        }
        if (req.file) {
            fileUnlik(customerData.image);
            if (!req.body.typename) req.body.typename = 'customer'
            req.body.image = `/${req.body.typename}/${req.file.filename}`;
        }
        const updateCustomer = await customerModel.updateOne({ _id: req.customer._id }, req.body, { new: true });
        if (updateCustomer.modifiedCount > 0) {
            SUCCESS.CUSTOMER.UPDATE_CUSTOMER.data = { _id: customerData._id };
            return SUCCESS.CUSTOMER.UPDATE_CUSTOMER;
        }
        return ERROR.CUSTOMER.CUSTOMER_NOT_UPDATE;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function deleteCustomer
 * @description function to delete customer
 * @param (req)
 * @author Akshay Mondal
 */
exports.deleteCustomer = async (req) => {
    try {
        const customerData = await customerModel.findOne({ _id: req.customer._id });
        if (customerData && customerData !== {}) {
            const deleteCustomer = await customerModel.deleteOne({ _id: req.customer._id });
            if (deleteCustomer.deletedCount > 0) {
                fileUnlik(customerData.image);
                SUCCESS.CUSTOMER.DELETE_CUSTOMER.data = { _id: customerData._id }
                return SUCCESS.CUSTOMER.DELETE_CUSTOMER;
            }
        }
        return ERROR.CUSTOMER.CUSTOMER_NOT_FOUND;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}