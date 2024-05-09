const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [
        {
            code: String,
            qty: Number,
            price: Number
        }
    ],
    totalPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
