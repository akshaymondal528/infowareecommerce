// Global Imports
const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
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
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('admin', adminSchema);