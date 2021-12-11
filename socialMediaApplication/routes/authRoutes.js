const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/User');
const keys = require('../config/keys');
const bcrypt = require('bcrypt');

module.exports = app => {
    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/auth/currentUser', async (req, res) => {
        console.log(req);
        await res.send(req.user);
    })

    app.post('/auth/signin', 
        passport.authenticate('local'),
        function(req, res) {
        console.log(req);
        res.send(req.user);
    });

    app.patch('/auth/addUserData', async (req, res, next) => {
        console.log(req.user);
        
        await User.findOneAndUpdate(
            {
                _id: req.user._id
            },
            {
                $set: { bio: req.body.biography }
            }
        );

        const user = await User.findOne({_id: req.user._id});

        res.send(user);
        
    });

    app.get('/auth/users', async (req, res, next) => {
        console.log(req.user);
        
        let allUsers = await User.find({});

        

        res.send(allUsers);
        
    });

    app.patch('/auth/addComment', async (req, res, next) => {

        console.log(req);
        await User.findOneAndUpdate(
            {
                username: req.body.username
            },
            {
                $push: {
                    comments: {
                        username: req.body.commenterUsername,
                        email: req.body.email,
                        profileImage: req.body.profileImage,
                        comment: req.body.comment,
                        submissionDate: Date(Date.now()).toString()
                    }
                }
            }
        );

        const user = await User.findOne({_id: req.user._id});

        res.send(user);
        
    });

    app.patch('/auth/addImageData', async (req, res, next) => {

        
        await User.findOneAndUpdate(
            {
                _id: req.user._id
            },
            {
                $set: { profileImage: req.body.profileImage }
            }
        );

        const user = await User.findOne({_id: req.user._id});

        res.send(user);
        
    })

    app.patch('/auth/changePassword', async (req, res, next) => {
        console.log(req);

        const email = req.body.email;
        const password = req.body.hash;
        
            const salt = bcrypt.genSaltSync(10);
            console.log(salt);
            const hash = bcrypt.hashSync(password, salt);
            console.log(hash);
            

        await User.findOneAndUpdate(
            {
                email: email
            },
            {
                $set: { hash: hash, salt: salt }
            }
        );

        return res.status(200).send({ message: 'Password changed successfully.'});
        
    });

    app.post('/auth/signup', async (req, res, next) => {
        console.log(req);

        const email = req.body.email;
        const password = req.body.hash;
        const username = req.body.username;



        let existingUsers = await User.find().or([{email: email}, {username: username}]);
        console.log(existingUsers);

        if(existingUsers.length) {
            return res.status(422).send({ message: 'Email or username is already in use.'})
        } 
            const user = new User({
                email: email,
                hash: password
            });
            console.log(user);
            const salt = bcrypt.genSaltSync(10);
            console.log(salt);
            const hash = bcrypt.hashSync(user.hash, salt);
            console.log(hash);
            user.salt = salt;
            user.hash = hash;
            //Default Image
            user.profileImage = 'data:image/png;base64,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';
            user.username = req.body.username;
            
            user.save((err) => {
                if(err) {
                    return next(err);
                }
                console.log(user);
                return res.status(200).send({ message: 'Account created successfully.'});
            });
        
    });
}

    
