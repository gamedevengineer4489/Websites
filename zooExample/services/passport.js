const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
const Cart = mongoose.model('cart');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async(acessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if(existingUser) {
                return done(null, existingUser);
            }

            const cart = new Cart({
                email: profile.emails[0].value,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                googleId: profile.id
            })

            cart.save();

            console.log(profile.name);
            const user = await new User({ googleId: profile.id, email: profile.emails[0].value, firstName: profile.name.givenName, lastName: profile.name.familyName  }).save();
            user.save();
            done(null, user);
        }
    )
)