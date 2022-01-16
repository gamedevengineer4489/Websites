const mongoose = require('mongoose');
const { Schema } = mongoose;

const gamesSchema = new Schema({
    // Product Name
    productName: String,
    // Product Price
    productPrice: Number,
    // Quantity
    quantity: Number,
    // Image URL
    imageURL: String
});

const GAMES = mongoose.model('games', gamesSchema);

module.exports = GAMES;