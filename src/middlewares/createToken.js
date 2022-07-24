// Global Imports
const JWT = require('jsonwebtoken');

// Local Imports
const { CONST_CREDENTIALS } = require('../config/env');

/**
 * @function createToken
 * @description function to generate token
 * @param (key)
 * @author Akshay Mondal
 */
exports.createToken = async (key) => {
    try {
        return JWT.sign(key, CONST_CREDENTIALS.AUTH_SECRET);
    } catch (error) {
        throw error
    }
}
