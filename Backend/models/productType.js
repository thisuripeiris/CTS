const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productTypeSchema = new Schema({
    categoryName: {
        type: String,
        required: true
    }
});

const productType = mongoose.model('productType', productTypeSchema);

module.exports = productType;
