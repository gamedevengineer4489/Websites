const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    image: String,
    nearestCity: String,
    salt: String,
    hash: String
})

const User = mongoose.model('users', userSchema)

module.exports = User;