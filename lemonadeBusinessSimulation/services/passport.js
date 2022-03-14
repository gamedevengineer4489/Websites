const db = require('../config/db'); // Using the mysql database
const keys = require('../config/keys');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



    passport.serializeUser((user, done) => {
        
        done(null, user);
    });

    passport.deserializeUser(( req, user, done) => {
        db.query("SELECT * FROM users WHERE GoogleID = ?", [user.GoogleID], (err, user) => {
            if(err) {
                return done(err);
            }
            
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    }, (request, accessToken, refreshToken, profile, done) => {
        db.query("SELECT * FROM users where GoogleID = ?", [profile.id], (err, rows) => {

            if(err) {
                console.log(err);
                return done(err);
            }
            
            if(rows.length) {
                return done(null, rows[0]);
            } else {
                var newUserMySQL = new Object();
                newUserMySQL.EmailAddress = profile.emails[0].value;
                newUserMySQL.GoogleID = profile.id;
                newUserMySQL.FirstName = profile.name.givenName;
                newUserMySQL.LastName = profile.name.familyName;
                
                
                var insertQuery = "INSERT INTO users (GoogleID, FirstName, LastName, EmailAddress, id) VALUES (?,?,?,?,?)";
                db.query(insertQuery, [newUserMySQL.GoogleID, newUserMySQL.FirstName, newUserMySQL.LastName, newUserMySQL.EmailAddress], (err, rows) => {
                    
                    return done(null, newUserMySQL);
                });
            }
        });
    }));
