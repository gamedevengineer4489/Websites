const passport = require('passport');
const mongoose = require('mongoose');
const Blog = mongoose.model('blogs');
const User = mongoose.model('users');
const keys = require('../config/keys');
const requireLogin = require('../middleware/requireLogin');


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


        
    app.post('/api/blog_posts', requireLogin,
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

    app.patch('/api/list/likes/:Id', requireLogin,
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

    app.patch('/api/list/dislikes/:Id', requireLogin,
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

            const blogs = await Blog.find({ userId: req.user.userID });
            res.send(blogs);

            
        }
    )

    app.get('/api/blog_posts', requireLogin,
        async function(req, res) {

           
            const blogs = await Blog.find({ userId: req.user.userID });
            res.send(blogs);
        }
    )

    app.patch('/api/blog_posts/edit/:blogID', requireLogin,
        async function(req, res) {

           
            
            Blog.updateOne(
                {
                    Id: req.params.blogID
                },
                {
                    $set: { title: req.body.title, body: req.body.body }
                }
            ).exec();

            const blogs = await Blog.find({ userId: req.user.userID });
            res.send(blogs);
        }
    )

    app.patch('/api/changePassword', 
        async function(req, res)
        {

            User.findByUsername(req.body.username).then(function(sanitizedUser) {
                if(sanitizedUser)
                {
                    sanitizedUser.setPassword(req.body.password, function() {
                        sanitizedUser.save();
                        res.status(200).json({message: 'password reset successful.'})
                    })
                } else {
                    res.status(500).json({message: 'This user does not exist.'})
                }
            }, function(err) {
                console.error(err);
            })

           
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
            // The user can access a blog regardless of whether they are logged in or not. 
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

        app.get('/api/users',
        
            async function(req, res)
            {
                
                let foundUsers = await User.find();
                console.log(foundUsers);
                res.send(foundUsers);
            }
        )

        app.delete('/api/blog_posts/:id', requireLogin,
            async function(req, res)
            {
                console.log(req);
                await Blog.findOneAndDelete({Id: req.params.id}).exec();
                
                const blogs = await Blog.find({ userId: req.user.userID }) || [{}];
                res.send(blogs);
            }
        
        )

        app.patch('/api/blog/:id', requireLogin,

            
            async function(req, res)
            {
                
                console.log(req.params);
                console.log(req.body);
                const {id} = req.params;
                Blog.findOneAndUpdate(
                    {
                        Id: id
                    },
                    {
                        $push: {
                            comments: {
                                email: req.body.email,
                                username: req.body.username,
                                comment: req.body.comment,
                                userID: req.body.userID, 
                                submissionDate: Date(Date.now()).toString()
                            }
                        }
                    
                    }
                ).exec();

                let blog = Blog.findOne({
                    Id: id
                })

                res.send(blog);
            }
        )

        app.delete('/api/blog/comment/:id/:blogID/:otherUserID', requireLogin,
            async function(req, res)
            {
                console.log(req.params);
                Blog.findOneAndUpdate(
                    {
                        _id: req.params.blogID
                    },
                    {
                         $pull: { 'comments': {_id: req.params.id }}
                    }
                ).exec();

                let blogs = Blog.find({userId: req.params.otherUserID}).exec();

                res.send(blogs);
            }
        )

        app.patch('/api/blog/comment/edit/:id/:blogID/:otherUserID', requireLogin,
            async function(req, res)
            {
                console.log(req.params);
                console.log(req.body);
                


                Blog.updateOne(
                    {
                        Id: req.params.blogID,
                        comments: {
                            $elemMatch: { _id: req.params.id }
                        }
                    },
                    {
                         $set: {'comments.$.comment': req.body.comment}
                    }
                ).exec();

                let blogs = Blog.find({userId: req.params.otherUserID}).exec();

                res.send(blogs);
            }
        )
    }




    
