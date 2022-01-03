const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');
const Purchases = mongoose.model('purchases');
const Inventory = mongoose.model('inventory');
const Coffee = mongoose.model('coffee');
const Cart = mongoose.model('cart');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async(req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'Thanks for shopping. Please come again.',
            source: req.body.token.id
        });

        const purchase = new Purchases({
            name: req.body.token.card.name,
            city: req.body.token.card.address_city,
            country: req.body.token.card.address_country,
            last4: req.body.token.card.last4,
            totalPaid: req.body.amount,
            items: req.body.items
        });

        let cart = await Cart.findOneAndUpdate({ email: req.user.email }, {$pullAll: { items: req.body.items }});

        for(item of req.body.items)
        {
            await Inventory.findOneAndUpdate({_id: item._id}, {$inc: {quantity: -1}}).exec();
            await Coffee.findOneAndUpdate({_id: item._id}, {$inc: {quantity: -1}}).exec();
        }
        cart.save();
        purchase.save();
        res.send(req.user);
    })
}