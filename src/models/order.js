// Global Imports
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'product'
    },
    customerId: {
        type: mongoose.Types.ObjectId,
        ref: 'product'
    },
    price: {
        type: Number,
        default: 0
    },
    paymentType: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('order', orderSchema);