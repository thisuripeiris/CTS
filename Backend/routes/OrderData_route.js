const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, address, items, totalPrice } = req.body;
        const order = new Order({
            firstName,
            lastName,
            email,
            address,
            items,
            totalPrice
        });
        await order.save();
        res.status(201).json({ message: 'Order placed successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save order data' });
    }
})


module.exports = router;


