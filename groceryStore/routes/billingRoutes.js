const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async(req, res) => {
        console.log(req);
        const charge = await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'Thanks for shopping. Please come again.',
            source: req.body.token.id
        });

        res.send(req.user);
    })
}