const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    email: String
});

const USER = mongoose.model('users', userSchema);

module.exports = USER;