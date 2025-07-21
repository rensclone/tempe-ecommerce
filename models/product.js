const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);