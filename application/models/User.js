const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');




const customSchema = new Schema({
    googleID: String,
    spotifyID: String,
    email: String,
    googleUserName: String,
    spotifyUserName: String,
    steamUserName: String,
    imageURLGoogle: String,
    imageURLSpotify: String,
    imageURLSteam: String,
    imageURL: String,
    password: String,
    username: String,
    firstName: String,
    lastName: String,
    userID: String,
    avatar: String
});

customSchema.plugin(passportLocalMongoose);

mongoose.model('users', customSchema);