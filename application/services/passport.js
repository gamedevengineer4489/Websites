const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const SteamStrategy = require('passport-steam').Strategy;


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

            const user = await new User({ userID: profile.id, email: profile.emails[0].value, googleUserName: profile.displayName, imageURLGoogle: profile.photos[0].value }).save();
            done(null, user);
        }
    )
);

passport.use(new SteamStrategy(
        {
            returnURL: keys.return,
            realm: keys.realm,
            apiKey: keys.steamKey
        },
        async function(identifier, profile, done) {
            const existingUser = await User.findOne({ userID: profile.id });

            if(existingUser) {
                return done(null, existingUser);
            }


            const user = await new User({ userID: profile.id, steamUserName: profile.displayName, imageURLSteam: profile.photos[0].value }).save();
            done(null, user);
        }  
    )
)

// The authenticate function is part of the passport-local-mongoose library.
passport.use(new LocalStrategy(User.authenticate()));

// Without the passport-local-moongoose using the passport-local strategy would be a bit more complicated. The passport-local-mongoose library hashes the password and authenticates the user.
// Without passport-local-mongoose this would have to be done manually.



