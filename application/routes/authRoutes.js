const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const Blog = mongoose.model('blogs');
const User = mongoose.model('customusers');

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
            console.log(req);
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
                console.log(req);
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
            console.log(req);
            res.send(req.user);
        }
    )

    app.get('/api/current_user_google', 
        function(req, res) {
            res.send(req.user);
        }
    )
        
    app.post('/api/blog_posts',
        // Post the blog's data to the mongoDB database

        
        // First we format the blog's data in a mongoDB database object.
        

        async function(req, res) {
            //console.log(req.body);
            const blog = new Blog({
                userId: req.body.userId,
                username: req.body.username,
                email: req.body.email,
                body: req.body.body,
                title: req.body.title,
                date_created: await Date(Date.now()).toString()
                
            });

            try {
                // Save the data on a database.
                await blog.save();
                const user = await req.user.save();

                res.send(user);
            } catch(err) {
                res.status(422).send(err);
            }
           

        }
    )

    app.get('/api/blog_posts',
        async function(req, res) {
            //console.log(req);
            //console.log(res);
            const blogs = await Blog.find({ email: req.user.email, userID }) || [{}];
            //console.log(blogs);
            res.send(blogs);
        }
    )

    app.post('/api/register', 
        async function(req, res) {
            console.log(req.body);
            const existingUser = User.find({ email: req.body.email,  userID: any });
            if(existingUser) {
                res.send("A user with that email already exists. Please log-in");
                alert("A user with that username or email already exists. Please log-in");
                res.redirect('/');
            }

            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                userID: Math.random().toString(32)
            })
            
            
            try {
                // Save the data on a database.
                await newUser.save();
                const user = await req.user.save();

                res.send(user);
                res.redirect('/list');
            } catch(err) {
                res.status(422).send(err);
                res.redirect('/register');
            }
            

        }
    )
};