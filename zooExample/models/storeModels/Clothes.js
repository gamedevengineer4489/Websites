const mongoose = require('mongoose');
const { Schema } = mongoose;

const clothesSchema = new Schema({
    // Product Name
    productName: String,
    // Product Price
    productPrice: Number,
    // Quantity
    quantity: Number,
    // Image URL
    imageURL: String
});

const CLOTHES = mongoose.model('clothes', clothesSchema);

module.exports = CLOTHES;