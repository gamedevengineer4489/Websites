const mongoose = require('mongoose');
const commentSchema = require('../models/Comment');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: String,
    hash: String,
    salt: String,
    bio: String,
    profileImage: String,
    comments: [commentSchema]
});

const User = mongoose.model('users', userSchema);

module.exports = User;