const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleTypeSchema = new Schema({
    vehicle: {
        type: String,
        required: true
    }
});

const vehicleType = mongoose.model('vehicleType', vehicleTypeSchema);

module.exports = vehicleType;
