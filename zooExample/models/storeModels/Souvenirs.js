const mongoose = require('mongoose');
const { Schema } = mongoose;

const souvenirSchema = new Schema({
    // Product Name
    productName: String,
    // Product Price
    productPrice: Number,
    // Quantity
    quantity: Number,
    // Image URL
    imageURL: String
})

const SOUVENIRS = mongoose.model('souvenirs', souvenirSchema);

module.exports = SOUVENIRS;
