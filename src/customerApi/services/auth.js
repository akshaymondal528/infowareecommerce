// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');
const customerModel = require('../../models/customer');
const { createToken } = require('../../middlewares/createToken');
const { fileUnlik } = require('../../utils/fileUnlink')

/**
 * @function registerCustomer
 * @description function to register customer
 * @param (req)
 * @author Akshay Mondal
 */
exports.registerCustomer = async (req) => {
    try {
        const { firsName, lastName, userName, email, mobile, password, confirmPassword } = req.body
        const findUserByUserName = await customerModel.findOne({ userName });
        let filePath;
        if (findUserByUserName && findUserByUserName !== {}) {
            if (req.file) filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`
            fileUnlik(filePath);
            return ERROR.USERNAME_EXIST;
        }
        const findUserByEmail = await customerModel.findOne({ email });
        if (findUserByEmail && findUserByEmail !== {}) {
            if (req.file) filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`
            fileUnlik(filePath);
            return ERROR.EMAIL_EXIST;
        }
        const findUserByMobile = await customerModel.findOne({ mobile });
        if (findUserByMobile && findUserByMobile !== {}) {
            if (req.file) filePath = `/${req.file.path.split('/').splice(1, 2).join('/')}`
            fileUnlik(filePath);
            return ERROR.MOBILE_EXIST;
        }
        if (password !== confirmPassword) return ERROR.CONFIRM_PASSWORD_NOT_MATCH;
        if (req.file) {
            if (!req.body.typename) req.body.typename = 'customer'
            image = `/${req.body.typename}/${req.file.filename}`;
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const registerCustomer = await customerModel.create({
            firsName,
            lastName,
            userName,
            image,
            email,
            mobile,
            password: hashPassword
        });
        if (registerCustomer && registerCustomer !== {}) SUCCESS.CUSTOMER.REGISTRATION.data = { _id: registerCustomer._id };
        return SUCCESS.CUSTOMER.REGISTRATION;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function loginCustomer
 * @description function to login customer
 * @param (req)
 * @author Akshay Mondal
 */
exports.loginCustomer = async (req) => {
    try {
        let customerData;
        if (req.body.userName) {
            let findUserByUsername = await customerModel.findOne({ userName: req.body.userName });
            customerData = findUserByUsername;
        }
        if (req.body.email) {
            let findUserByEmail = await customerModel.findOne({ email: req.body.email });
            customerData = findUserByEmail;
        }
        if (!customerData) return ERROR.INVALID_CREDENTIALS;
        let { password, authKey, ...rest } = customerData._doc;
        if (password && await bcrypt.compare(req.body.password, password)) {
            const token = await createToken(rest);
            await customerModel.updateOne({ email: req.body.email }, { authKey: token });
            rest.token = token;
            SUCCESS.CUSTOMER.LOGIN.data = rest;
            return SUCCESS.CUSTOMER.LOGIN;
        }
        return ERROR.INVALID_CREDENTIALS;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}