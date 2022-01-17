const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User');
require('./models/Sale');
require('./models/Cart');
require('./models/storeModels/Clothes');
require('./models/storeModels/Films');
require('./models/storeModels/Games');
require('./models/storeModels/Souvenirs');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        keys: [keys.cookie],
        maxAge: 1000 * 60 * 60 * 24
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: [ 'profile', 'email' ]
    })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/api/current_user', (req, res) => {
    res.send(req.user)
});

const CLOTHES = require('./models/storeModels/Clothes');
const FILMS = require('./models/storeModels/Films');
const GAMES = require('./models/storeModels/Games');
const SOUVENIRS = require('./models/storeModels/Souvenirs');
const CART = require('./models/Cart');

app.get('/store/clothes', async (req, res) => {
    const clothesInventory = await CLOTHES.find({}).exec();
    console.log(clothesInventory);
    res.send(clothesInventory);
});

app.get('/store/films', async (req, res) => {
    const filmsInventory = await FILMS.find({}).exec();

    res.send(filmsInventory);
});

app.get('/store/games', async (req, res) => {
    const gamesInventory = await GAMES.find({}).exec();

    res.send(gamesInventory);
});

app.get('/store/souvenirs', async (req, res) => {
    const souvenirsInventory = await SOUVENIRS.find({}).exec();

    res.send(souvenirsInventory);
});

app.post('/store/addToCart', async (req, res) => {
    // A unique id is added.
    let cart = await CART.findOneAndUpdate({ email: req.user.email }, {$push: { items: { _id: Math.random().toString(), productName: req.body.productName, productPrice: req.body.productPrice, quantity: req.body.quantity, id: req.body.id, imageURL: req.body.imageURL } }}).exec();
    cart.save();
    let newCart = await CART.findOne({ email: req.user.email }).exec();

    
    await CLOTHES.findOneAndUpdate({_id: req.body._id}, {$inc: {quantity: -1}}).exec();
    await FILMS.findOneAndUpdate({_id: req.body._id}, {$inc: {quantity: -1}}).exec();
    await GAMES.findOneAndUpdate({_id: req.body._id}, {$inc: {quantity: -1}}).exec();
    await SOUVENIRS.findOneAndUpdate({_id: req.body._id}, {$inc: {quantity: -1}}).exec();
    res.send(newCart);
});

app.get('/store/getCart', async (req, res) => {
    console.log(req);
    let cart = await CART.findOne({ email: req.user.email }).exec();
    res.send(cart);
});


const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('./middleware/requireLogin');
const PURCHASES = require('./models/Sale');

app.post('/api/stripe', requireLogin, async(req, res) => {
    await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Thanks for shopping. Please come again.',
        source: req.body.token.id
    });

    const purchase = new PURCHASES({
        name: req.body.token.card.name,
        city: req.body.token.card.address_city,
        country: req.body.token.card.address_country,
        last4: req.body.token.card.last4,
        totalPaid: req.body.amount,
        items: req.body.items
    });

    let cart = await CART.findOneAndUpdate({ email: req.user.email }, {$pullAll: { items: req.body.items }});

        
    cart.save();
    purchase.save();
    res.send(req.user);
})


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// ORDER IS VERY IMPORTANT HERE! These cannot be mixed up. 
const PORT = process.env.PORT || 5000;

app.listen(PORT);