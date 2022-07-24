// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { ERROR, SUCCESS } = require('../../helpers/constant');
const adminModel = require('../../models/admin');
const { createToken } = require('../../middlewares/createToken')

/**
 * @function registerAdmin
 * @description function to register admin
 * @param (req)
 * @author Akshay Mondal
 */
exports.registerAdmin = async (req) => {
    try {
        const { firsName, lastName, userName, email, mobile, password, confirmPassword } = req.body
        const findUserByUserName = await adminModel.findOne({ userName });
        if (findUserByUserName && findUserByUserName !== {}) return ERROR.USERNAME_EXIST;
        const findUserByEmail = await adminModel.findOne({ email });
        if (findUserByEmail && findUserByEmail !== {}) return ERROR.EMAIL_EXIST;
        const findUserByMobile = await adminModel.findOne({ mobile });
        if (findUserByMobile && findUserByMobile !== {}) return ERROR.MOBILE_EXIST;
        if (password !== confirmPassword) return ERROR.CONFIRM_PASSWORD_NOT_MATCH;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const registerAdmin = await adminModel.create({
            firsName,
            lastName,
            userName,
            email,
            mobile,
            password: hashPassword
        });
        if (registerAdmin && registerAdmin !== {}) SUCCESS.ADMIN.REGISTRATION.data = { _id: registerAdmin._id };
        return SUCCESS.ADMIN.REGISTRATION;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function loginAdmin
 * @description function to login admin
 * @param (req)
 * @author Akshay Mondal
 */
exports.loginAdmin = async (req) => {
    try {
        let findUserByEmail = await adminModel.findOne({ email: req.body.email });
        let { password, authKey, ...rest } = findUserByEmail._doc;
        if (!findUserByEmail) return ERROR.INVALID_CREDENTIALS;
        if (password && await bcrypt.compare(req.body.password, password)) {
            const token = await createToken(rest);
            await adminModel.updateOne({ email: req.body.email }, { authKey: token });
            rest.token = token;
            SUCCESS.ADMIN.LOGIN.data = rest;
            return SUCCESS.ADMIN.LOGIN;
        }
        return ERROR.INVALID_CREDENTIALS;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}