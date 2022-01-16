const mongoose = require('mongoose');
const { Schema } = mongoose;

const cart = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    items: Array
});

const CART = mongoose.model('cart', cart);

module.exports = CART;



