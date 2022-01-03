const mongoose = require('mongoose');
const { Schema } = mongoose;


const saleSchema = new Schema({
    name: String,
    city: String,
    country: String,
    last4: String,
    // The items purchased
    items: Array,
    // Price Paid
    totalPaid: Number,
    // Information about the user
    
})

const Sale = mongoose.model('purchases', saleSchema);

module.exports = Sale;