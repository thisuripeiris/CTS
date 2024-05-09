const express = require('express');
const router = express.Router();
const ProductType = require('../models/productType');

// Fetch all products
router.get('/', async (req, res) => {
    try {
        const productType = await ProductType.find({});
        console.log('ProductType:', productType);
        res.status(200).json(productType);
    } catch (err) {
        console.error('Error fetching productType:', err);
        res.status(500).json({ error: 'Error fetching productType' });
    }
});

// router.post('/productData', (req, res) => {
//   try {
//     res.send([global.products, productCategory])
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server Error")
//   }
// })



module.exports = router;
