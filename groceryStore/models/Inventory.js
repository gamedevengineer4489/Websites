const mongoose = require('mongoose');
const { Schema } = mongoose;


const inventorySchema = new Schema({
    // Product Name
    productName: String,
    // Price 
    productPrice: Number,
    // Information about the user
    quantity: Number,
    // Profile Image 
    imageURL: String,
    // Unique number identifying item
    id: Number
    
})

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = Inventory;