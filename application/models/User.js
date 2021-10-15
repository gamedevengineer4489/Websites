const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    spotifyID: String,
    email: String,
    googleUserName: String,
    spotifyUserName: String,
    imageURLGoogle: String,
    imageURLSpotify: String
});

mongoose.model('users', userSchema);