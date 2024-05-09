const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    console.log('Products:', products);
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Error fetching products' });
  }
});



module.exports = router;
