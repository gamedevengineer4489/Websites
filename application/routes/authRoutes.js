const passport = require('passport');
const mongoose = require('mongoose');
const Blog = mongoose.model('blogs');
const User = mongoose.model('users');
const keys = require('../config/keys');


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
    ///////////
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
        '/auth/steam',
        passport.authenticate('steam'), 
        function(req, res) {
            // Redirects back to steam
        }
    );

    app.get(
            '/auth/steam/return',
            passport.authenticate('steam'),
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
                Id: req.body.Id,
                avatar: req.body.avatar, 
                likes: 0,
                dislikes: 0,
                users: { email: req.body.email, responded: false }
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

    app.patch('/api/list/likes/:Id',
        async function(req, res) {
            console.log(req);

            const {Id} = req.params;

            await Blog.updateOne(
                {
                    Id: Id,
                    likes: 0,
                    dislikes: 0,
                    users: {
                        $elemMatch: { email: req.user.email, responded: false }
                    }
                },
                {
                    $inc: { 'likes': 1 },
                    $set: { 'users.$.responded': true },
                }
            ).exec();

            Blog.updateOne(
                {
                    Id: Id,
                    likes: 1,
                    dislikes: 0,
                    users: {
                        $elemMatch: { email: req.user.email,  responded: true }
                    }
                },
                {
                    $set: { 'likes': 0, 'dislikes': 0, 'users.$.responded': false  }
                }
            ).exec();

            Blog.updateOne(
                {
                    Id: Id,
                    likes: 0,
                    dislikes: 1,
                    users: {
                        $elemMatch: { email: req.user.email, responded: true }
                    }
                },
                {
                    $set: { 'likes': 1, 'dislikes': 0, 'users.$.responded': true },
                   
                }
            ).exec();

            const blogs = await Blog.find({ userId: req.user.userID }).exec();
            res.send(blogs);
        }
    )

    app.patch('/api/list/dislikes/:Id',
        async function(req, res) {
            console.log(req);

            const {Id} = req.params;

            Blog.updateOne(
                {
                    Id: Id,
                    likes: 0,
                    dislikes: 0,
                    users: {
                        $elemMatch: { email: req.user.email, responded: false }
                    }
                },
                {
                    $inc: { 'dislikes': 1 },
                    $set: { 'users.$.responded': true },
                }
            ).exec();

            Blog.updateOne(
                {
                    Id: Id,
                    likes: 0,
                    dislikes: 1,
                    users: {
                        $elemMatch: { email: req.user.email, responded: true }
                    }
                },
                {
   
                    $set: { 'dislikes': 0 , 'likes': 0 , 'users.$.responded': false },
                }
            ).exec();

            Blog.updateOne(
                {
                    Id: Id,
                    likes: 1,
                    dislikes: 0,
                    users: {
                        $elemMatch: { email: req.user.email, responded: true }
                    }
                },
                {
                    $set: { 'likes': 0, 'dislikes': 1, 'users.$.responded': true },
                   
                }
            ).exec();

            const blogs = await Blog.find({ userId: req.user.userID }) || [{}];
            res.send(blogs);

            
        }
    )

    app.get('/api/blog_posts',
        async function(req, res) {

           
            const blogs = await Blog.find({ userId: req.user.userID }) || [{}];
            res.send(blogs);
        }
    )

    app.patch('/api/blog_posts/edit/:blogID',
        async function(req, res) {

           
            
            Blog.updateOne(
                {
                    Id: req.params.blogID
                },
                {
                    $set: { title: req.body.title, body: req.body.body }
                }
            ).exec();

            const blogs = await Blog.find({ userId: req.user.userID }) || [{}];
            res.send(blogs);
        }
    )

    app.post('/api/register', 
        async function(req, res) {
                    // Save new User to database 
                    console.log(req);
                    const newUser = new User({
                        username: req.body.username,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        userID: Math.random().toString(32).substring(2),
                        imageURL: req.body.imageURL,
                        avatar: req.body.avatar
                    })
                    console.log(newUser);
                    User.register(newUser, req.body.password, function(err, user) {
                        // A user with the same username cannot be created.
                            if(err) {
                                console.log(err);
                                console.log({ success: false, message: 'Your account could not be saved. Error: ', err})
                                res.redirect('/')
                            } else {
                                console.log({ success: true, message: "Your account has been saved"});
                                
                
                                
                            }
                    })
    })
                    
            
                
            app.post('/auth/local',
                passport.authenticate('local', { failureRedirect: '/login'}),
                
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

                console.log(req);

                res.send(req.user);

            }
        )

        app.get('/api/current_user/:id', 
        
            async function(req, res) {

                let foundUser = await User.findOne({ userID: req.params.id });
                res.send(foundUser);

            }
        )

        app.get('/api/user/:userID',
        
            async function(req, res)
            {
                let foundUser = await User.findOne({ userID: req.params.userID });
                res.send(foundUser);
            }
        )

        app.get('/api/blog/:userID',
        
            async function(req, res)
            {
                let foundBlogs = await Blog.find({ userId: req.params.userID });
                res.send(foundBlogs);
            }
        )

        app.delete('/api/blog_posts/:id',
            async function(req, res)
            {
                console.log(req);
                await Blog.findOneAndDelete({Id: req.params.id}).exec();
                
                const blogs = await Blog.find({ userId: req.user.userID }) || [{}];
                res.send(blogs);
            }
        
        )
    }




    
