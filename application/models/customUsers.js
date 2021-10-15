const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    spotifyID: String,
    email: String,
    googleUserName: String,
    spotifyUserName: String,
    imageURLGoogle: String,
    imageURLSpotify: String,
    password: String,
    username: String,
    firstName: String,
    lastName: String,
    userID: String
});

mongoose.model('customusers', userSchema);