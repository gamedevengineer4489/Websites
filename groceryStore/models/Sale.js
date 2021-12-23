const mongoose = require('mongoose');
const { Schema } = mongoose;


const saleSchema = new Schema({
    // The items purchased
    items: Array,
    // Price Paid
    totalPrice: Number,
    // Information about the user
    
})

const Sale = mongoose.model('purchases', saleSchema);

module.exports = Sale;