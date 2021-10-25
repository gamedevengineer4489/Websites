const mongoose = require('mongoose');
const { Schema } = mongoose;

const inputSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = inputSchema;