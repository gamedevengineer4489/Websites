const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = (app) => {
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

    app.post('/auth/signup', async (req, res, next) => {
        console.log(req);

        const {email, hash, firstname, lastname, image } = req.body;
        
        let existingUser = await User.findOne({ email: email });
    
        if(existingUser) {
            return res.status(422).send({ message: 'An account with this email already exists. Please sign-in.'});
        }
        
        const user = new User({
            email: email,
            hash: hash,
            firstname: firstname,
            lastname: lastname,
            image: image
        });

        const salt = bcrypt.genSaltSync(10);
        console.log(salt);
        const Hash = bcrypt.hashSync(user.hash, salt);

        user.salt = salt;

        user.hash = Hash;

        user.save((err) => {
            if(err) {
                return next(err);
            }

            return res.status(200).send({ message: 'Account created successfully. '});
        })
    });

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
}

////////////