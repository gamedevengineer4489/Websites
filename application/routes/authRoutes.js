const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const passportLocalMongoose = require('passport-local-mongoose');
const Blog = mongoose.model('blogs');
const CustomUser = mongoose.model('customusers');


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
        function(req, res, next) {
            console.log(req);
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
            console.log(req);
            //console.log(res);
            const blogs = await Blog.find({ username: req.user.username }) || [{}];
            //console.log(blogs);
            res.send(blogs);
        }
    )

    app.post('/api/register', 
        async function(req, res) {
                    // Save new User to database 
                    console.log(req);
                    const newUser = new CustomUser({
                        username: req.body.username,
                        password: req.body.password,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        userID: Math.random().toString(32)
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
                    console.log(req);
                    console.log(req.user);
                    res.send(req.user);
                }
            )

            app.get('/auth/local/callback',
                    
                    function(req, res) {
                            console.log(req.user);
                            res.send(req.user);
                    }
            )
            
            
            app.post('/api/current_user_local', 
                    
                async function(req, res) {
                    console.log('hello world');
                    await console.log(req);
                    res.send(req.user);

            }

            
        )

        app.get('/api/current_user', 
                    
            async function(req, res) {
                // console.log('hello world');
                // await console.log(req.user);
                // // res.send(req.body);
                res.send(req.user);
            }
        )
            
             

            
                    
            

            
            

    }




    
