const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
//const bcrypt = require('bcryptjs');



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
    userID: String
});

// Before saving a model, run this function. Encrypt a password using salt. This is called hashing. 
// customSchema.pre('save', function(next) {
//     // get access to the user model
//     const users = this;

//     bcrypt.genSalt(10, function(err, salt) {
//         if(err) {
//             return next(err);
//         }

//         // hash (encrypt) our password using the salt
//         bcrypt.hash(users.password, salt, null, function(err, hash) {
//             if(err) {
//                 return next(err);
//             }

//             // overwrite plain text password with encrypted password
//             users.password = hash;
//             next();
//         })
//     }) 
// })

// customSchema.methods.comparePassword = function(candidatePassword, callback) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if(err) {
//             return callback(err);
//         }

//         callback(null, isMatch);
//     });
// }

customSchema.plugin(passportLocalMongoose);

mongoose.model('users', customSchema);