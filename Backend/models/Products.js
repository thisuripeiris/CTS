const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  vehicleModel: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
