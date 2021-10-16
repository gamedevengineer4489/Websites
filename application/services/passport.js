const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
const CustomUser = mongoose.model('customusers');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    User.findById(id).then(user => {
        done(null, user);
    })
})

passport.use( new SpotifyStrategy(
        {
            clientID: keys.spotifyClientID,
            clientSecret: keys.spotifyClientSecret,
            callbackURL: '/auth/spotify/callback',
            proxy: true
        }, 
        async function(accessToken, refreshToken, expires_in, profile, done) 
        {
            const existingUser = await User.findOne({ spotifyID: profile.id });

            if(existingUser) {
                return done(null, existingUser);
            }
            console.log(profile.photos[0].value);
            const user = await new User({ spotifyID: profile.id, email: profile.emails[0].value, spotifyUserName: profile.displayName,  imageURLSpotify: profile.photos[0].value }).save();
            done(null, user);
        }
    )
);

passport.use(new GoogleStrategy(
        {
                clientID: keys.googleClientID,
                clientSecret: keys.googleClientSecret,
                callbackURL: '/auth/google/callback',
                proxy: true
        },
        async function(accessToken, refreshToken, profile, done)
        {
            const existingUser = await User.findOne({ googleID: profile.id });

            if(existingUser) {
                return done(null, existingUser);
            }
            console.log(profile.photos[0].value);
            const user = await new User({ googleID: profile.id, email: profile.emails[0].value, googleUserName: profile.displayName, imageURLGoogle: profile.photos[0].value }).save();
            done(null, user);
        }
    )
);

passport.use(new LocalStrategy(
    {
        callbackURL: '/auth/local/callback',
        proxy: true
    },
    async (username, password, done) => {
        console.log("username is: " + username);
        console.log("password: " + password);
        const existingUser = await CustomUser.findOne({ username });
        //  (err, user) => {
        //     if(err) {
        //         return done(err);
        //     }
        //     console.log(user);
        //     if(!user) {
        //         return done(null, false);
        //     }
        //     // if(!user.verifyPassword(password)) {
        //     //     return done(null, false);
        //     // }
        //     return done(null, user);

        // };
        console.log(existingUser);
        if(password === existingUser.password)
        {
            console.log("Existing User's passowrd is: " + existingUser.password);
            
            return done(null, existingUser);
        }
    }
));

