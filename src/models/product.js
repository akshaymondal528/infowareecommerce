// Global Imports
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    type: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    sizes: {
        type: Array,
        default: ''
    },
    colors: {
        type: Array,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('product', productSchema);