const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const customSchema = new Schema({
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

customSchema.plugin(passportLocalMongoose);

mongoose.model('users', customSchema);