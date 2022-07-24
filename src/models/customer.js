// Global Imports
const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firsName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    userName: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    mobile: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    authKey: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('customer', customerSchema);