// Global imports
const jwt = require("jsonwebtoken");

// Local imports
const { CONST_CREDENTIALS } = require("../config/env");
const { errorResponseUnauth, errorResponseCatch } = require("../helpers/response");
const { ERROR } = require("../helpers/constant");
const adminModel = require("../models/admin");
const customerModel = require("../models/customer");

/**
 * @function adminCheckToken
 * @description function to check token for admin
 * @param (req res next)
 * @author Akshay Mondal
 */
exports.adminCheckToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        let adminData = await adminModel.findOne({ authKey: token });
        if (!adminData) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
        jwt.verify(token, CONST_CREDENTIALS.AUTH_SECRET, async (err, encoded) => {
            if (err) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
            req.admin = {
                _id: encoded._id,
                username: encoded.username,
                email: encoded.username,
                isActive: encoded.isActive,
            };
            next();
        });
    } catch (error) {
        errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
    }
};

/**
 * @function adminCheckToken
 * @description function to check token for customer
 * @param (req res next)
 * @author Akshay Mondal
 */
exports.customerCheckToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        let customerData = await customerModel.findOne({ authKey: token });
        if (!customerData) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
        jwt.verify(token, CONST_CREDENTIALS.AUTH_SECRET, async (err, encoded) => {
            if (err) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
            req.admin = {
                _id: encoded._id,
                username: encoded.username,
                email: encoded.username,
                isActive: encoded.isActive,
            };
            next();
        });
    } catch (error) {
        errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
    }
};
