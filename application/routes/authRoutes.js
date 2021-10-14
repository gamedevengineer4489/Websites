const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

// const Blog = mongoose.model('blogs');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: [ 'profile', 'email' ]
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        function(req, res) {
            // Successful authentication, redirect home
            res.redirect('/list');
        }
    )

    app.get(
        '/auth/spotify',
        passport.authenticate('spotify', {
            scope: ['user-read-email', 'user-read-private'],
            showDialog: true
        })
    );

    app.get(
            '/auth/spotify/callback',
            passport.authenticate('spotify'),
            function(req,res) {
                res.redirect('/list');
            }
    );
    

    app.get(
        '/api/logout', 
        function(req, res) {
            req.logout();
            res.redirect('/');
        }
    );

    app.get('/api/current_user_spotify', 
        function(req, res) {
            res.send(req.user);
        }
    )

    app.get('/api/current_user_google', 
        function(req, res) {
            res.send(req.user);
        }
    )
        
    app.post('/api/blog_posts',
        function(req, res) {
            //console.log(req.body);
            
            res.send([req.body]);

        }
    )

    app.get('/api/blog_posts',
        function(req, res) {
            //console.log(req);
            console.log(res);
            res.send([req.user]);

        }
    )
};