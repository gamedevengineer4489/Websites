const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const passportLocalMongoose = require('passport-local-mongoose');
const Blog = mongoose.model('blogs');
const CustomUser = mongoose.model('customusers');
const fs = require('fs');
const express = require('express');





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
            //console.log(req);
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
                //console.log(req);
                res.redirect('/list');
            }
    );
    

    app.get(
        '/api/logout', 
        function(req, res, next) {
            //console.log(req);
            req.logout();
            //req.clear();
            res.redirect('/');
        }
    );

    // app.get('/api/current_user_spotify', 
    //     function(req, res) {
    //         //console.log(req);
    //         res.send(req.user);
    //     }
    // )

    // app.get('/api/current_user_google', 
    //     function(req, res) {
    //         res.send(req.user);
    //     }
    // )
        
    app.post('/api/blog_posts',
        // Post the blog's data to the mongoDB database

        
        // First we format the blog's data in a mongoDB database object.
        

        async function(req, res) {
            console.log(req);
            const blog = new Blog({
                userId: req.body.userId,
                username: req.body.username,
                email: req.body.email,
                body: req.body.body,
                title: req.body.title,
                date_created: await Date(Date.now()).toString(),
                Id: req.body.Id
            });

            try {
                // Save the data on a database.
                await blog.save();
                if(req.user)
                {
                    const user = await req.user.save();
                    res.send(user);
                } else {
                    res.send(req.body);
                }
                
                
                
            } catch(err) {
                res.status(422).send(err);
            }
           

        }
    )

    app.get('/api/blog_posts',
        async function(req, res) {
            // console.log(req);
            // console.log(req.user);
            //console.log(res);
            if(req.user) {
                if(req.user.googleID) {  
                    const blogs = await Blog.find({ userId: req.user.googleID }) || [{}];
                    res.send(blogs);
                } else if(req.user.spotifyID) {
                    const blogs = await Blog.find({ userId: req.user.spotifyID }) || [{}];
                    res.send(blogs);
                } 
            }
            else {
                const blogs = await Blog.find({ userId: 'no0nkbc9n38' }) || [{}];
                res.send(blogs);
            }
            
            //console.log(blogs);
            
        }
    )

    app.post('/api/register', 
        async function(req, res) {
                    // Save new User to database 
                    console.log(req);
                    const newUser = new CustomUser({
                        username: req.body.username,
                        
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        userID: Math.random().toString(32).substring(2)
                    })
                    console.log(newUser);
                    CustomUser.register(newUser, req.body.password, function(err, user) {
                        // A user with the same username cannot be created.
                            if(err) {
                                console.log(err);
                                console.log({ success: false, message: 'Your account could not be saved. Error: ', err})
                                res.redirect('/')
                            } else {
                                console.log({ success: true, message: "Your account has been saved"});
                                passport.authenticate('local')(req, res, function() {
                                    res.redirect('/list');
                                })
                            }
                    })
    })
                    
            
                
            app.post('/auth/local',
                passport.authenticate('local', { failureRedirect: '/login'}),
                function(req, res) {
                    // Successful authentication, redirect home

                    //var userJSON = JSON.stringify(req.user);
                    // fs.writeFile("currentUser.json", userJSON, function(err, result) {
                    //     if(err) {
                    //         console.log('error', err);
                    //     }
                    // })
                    //console.log(userJSON);
                    res.send(req.user);
                }
            )

            app.get('/auth/local/callback',
                    
                    function(req, res) {

                            res.send(req.user);
                    }
            )
            
            
            app.post('/api/current_user_local', 
                    
                async function(req, res) {
                    console.log('hello world');

                    res.send(req.user);

            }

            
        )

        app.get('/api/current_user', 
                    
            async function(req, res) {
                // console.log('hello world');

                res.send(req.user);
    
                // // var sendThis = JSON.parse(currentUser.json);
                // // res.sendFile(sendThis);
            }
        )

        app.delete('/api/blog_posts/:id',
            async function(req, res)
            {
                console.log(req);
                await Blog.findOneAndDelete({Id: req.params.id}).exec();
            }
        
        )
    }




    
