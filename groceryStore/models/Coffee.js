const mongoose = require('mongoose');
const { Schema } = mongoose;


const coffeeSchema = new Schema({
    // Product Name
    productName: String,
    // Price 
    productPrice: Number,
    // Information about the user
    quantity: Number,
    // Profile Image 
    imageURL: String,
    
})

const Coffee = mongoose.model('coffee', coffeeSchema);

module.exports = Coffee;