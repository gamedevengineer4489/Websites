const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => 
        done(null, user)
    );
});

const localOptions = { usernameField: 'email', passwordField: 'hash'};
passport.use(new LocalStrategy(localOptions, async (email, hash, done) => {
        await User.findOne({email: email}, (err, user) => {
            if(err)
            {
                return done(err);
            }
            
            if(!user)
            {
                return done(null, false);
            }
            
            bcrypt.compare(hash, user.hash, (err, isMatch) => {
                if(err)
                {
                    return done(err);
                }

                if(!isMatch)
                {
                    return done(null, false);
                }

                done(null, user);
            });
        });
    })
)