const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Cart = require('../models/Cart');

module.exports = (app) => {
    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');

    });

    app.get('/auth/currentUser', (req, res) => {
        
        res.send(req.user);
    })

    app.post('/auth/signin', 
        passport.authenticate('local'),
        function(req, res) {
            res.send(req.user);
        }
    );

    app.post('/auth/signup', async (req, res, next) => {
        

        const {email, hash, firstname, lastname, image } = req.body;
        
        let existingUser = await User.findOne({ email: email }).exec();
    
        if(existingUser) {
            return res.status(422).send({ message: 'An account with this email already exists. Please sign-in.' });
        }
        
        const user = new User({
            email: email,
            hash: hash,
            firstname: firstname,
            lastname: lastname,
            image: image
        });

        // Each account must have a unique email.
        const cart = new Cart({
            email: email,
            firstName: firstname,
            lastName: lastname
        })

        const salt = bcrypt.genSaltSync(10);
        
        const Hash = bcrypt.hashSync(user.hash, salt);

        user.salt = salt;

        user.hash = Hash;

        user.save((err) => {
            if(err) {
                return next(err);
            }
            cart.save();
            return res.status(200).send({ message: 'Account created successfully. '});
        });

        
    });

    app.patch('/auth/changePassword', async (req, res, next) => {
        

        const email = req.body.email;
        const password = req.body.hash;
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let user = await User.findOneAndUpdate(
            {
                email: email
            },
            {
                $set: { hash: hash, salt: salt }
            }
        ).exec();
        
        return user;
        
    });
}

