const mongoose = require('mongoose');
const Inventory = mongoose.model('inventory');
const Cart = mongoose.model('cart');

module.exports = (app) => {
    app.get('/store/inventory', async (req, res) => {
        let inventory = await Inventory.find({});
        res.send(inventory);
    });

    app.post('/store/cart', async (req, res) => {
        let cart = await Cart.findOneAndUpdate({ email: req.user.email }, {$push: { items: {_id: req.body._id, productName: req.body.productName, productPrice: req.body.productPrice, quantity: req.body.quantity, id: req.body.id, imageURL: req.body.imageURL } }}).exec();
        cart.save();
        let newCart = await Cart.findOne({ email: req.user.email }).exec();
        res.send(newCart);
    });

    app.get('/store/getCart', async (req, res) => {
        console.log(req);
        let cart = await Cart.findOne({ email: req.user.email }).exec();
        res.send(cart);
    });
}