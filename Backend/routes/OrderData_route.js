const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        const { items, totalPrice } = req.body;
        const order = new Order({
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

router.post('/myOrderData', async (req, res) => {

})

module.exports = router;
