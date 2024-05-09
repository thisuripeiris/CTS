const express = require('express');
const router = express.Router();
const VehicleType = require('../models/vhicleType');

// Fetch all products
router.get('/', async (req, res) => {
    try {
        const vehicleType = await VehicleType.find({});
        console.log('VehicleType:', vehicleType);
        res.status(200).json(vehicleType);
    } catch (err) {
        console.error('Error fetching vehicleType:', err);
        res.status(500).json({ error: 'Error fetching vehicleType' });
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
