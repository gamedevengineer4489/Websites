const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
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
            console.log(profile);
            const user = await new User({ spotifyID: profile.id, email: profile.emails[0].value, spotifyUserName: profile.displayName }).save();
            done(null, user);
        }
    )
)

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
            console.log(profile);
            const user = await new User({ googleID: profile.id, email: profile.emails[0].value, googleUserName: profile.displayName }).save();
            done(null, user);
        }
    )
)

