const db = require('../config/database'); // Using the mysql database
const keys = require('../config/keys');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



    passport.serializeUser((user, done) => {
        
        done(null, user);
    });

    passport.deserializeUser(( req, user, done) => {
        db.query("SELECT * FROM users WHERE googleid = $1", [user.googleid], (err, result) => {
            if(err) {
                return done(err);
            }
            const {rows} = result;
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    }, (request, accessToken, refreshToken, profile, done) => {
        db.query("SELECT * FROM users WHERE googleid = $1", [profile.id], (err, result) => {
            
            if(err) {
                
                return done(err);
            }
            
            if(result.length) {
                return done(null, result[0]);
            } else {
                var newUserMySQL = new Object();
                newUserMySQL.emailaddress = profile.emails[0].value;
                newUserMySQL.googleid = profile.id;
                newUserMySQL.firstname = profile.name.givenName;
                newUserMySQL.lastname = profile.name.familyName;

                var alterTableQuery = "ALTER TABLE users ADD IF NOT EXISTS"  + ` decks_${profile.id} character varying`;
                db.query(alterTableQuery);
                
                var insertQuery =  "INSERT INTO users (googleid, firstname, lastname, emailaddress, decks" + `_${profile.id})` + "VALUES ($1,$2,$3,$4, $5)";
                
                db.query(insertQuery, [newUserMySQL.googleid, newUserMySQL.firstname, newUserMySQL.lastname, newUserMySQL.emailaddress, null], (err, result) => {
                    return done(null, newUserMySQL);
                });

                
            }
        });
    }));