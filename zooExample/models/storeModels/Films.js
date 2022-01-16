const mongoose = require('mongoose');
const { Schema } = mongoose;

const filmsSchema = new Schema({
    // Product Name
    productName: String,
    // Product Price
    productPrice: Number,
    // Quantity
    quantity: Number,
    // Image URL
    imageURL: String
});

const FILMS = mongoose.model('films', filmsSchema);

module.exports = FILMS;