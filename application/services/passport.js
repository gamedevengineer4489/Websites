const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


passport.serializeUser(function(user, done) {
    done(null, user.id);
});



passport.deserializeUser(function(id, done) {
    User.findById(id).then(user => {
        done(null, user);
    })
});

passport.use( new SpotifyStrategy(
        {
            clientID: keys.spotifyClientID,
            clientSecret: keys.spotifyClientSecret,
            callbackURL: '/auth/spotify/callback',
            proxy: true
        }, 
        async function(accessToken, refreshToken, expires_in, profile, done) 
        {
            const existingUser = await User.findOne({ userID: profile.id });

            if(existingUser) {
                return done(null, existingUser);
            }
            console.log(profile.photos[0].value);
            const user = await new User({ userID: profile.id, email: profile.emails[0].value, spotifyUserName: profile.displayName,  imageURLSpotify: profile.photos[0].value }).save();
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
            const existingUser = await User.findOne({ userID: profile.id });

            if(existingUser) {
                return done(null, existingUser);
            }
            console.log(profile.photos[0].value);
            const user = await new User({ userID: profile.id, email: profile.emails[0].value, googleUserName: profile.displayName, imageURLGoogle: profile.photos[0].value }).save();
            done(null, user);
        }
    )
);

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({
        username: username
    }, function(err, user) {
        // Error handling
        if(err)
        {
            return done(err);
        }
        // If user is not found
        if(!user)
        {
            return done(null, false);
        }

        // When the password is not correct
        if(!user.authenticate(password))
        {
            return done(null, false);
        }

        // If the username and password is correct, we return the user.
        // Maybe this is what was giving me issues
        return done(null, user);
    })
}));



