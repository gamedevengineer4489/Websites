const mongoose = require('mongoose');
const Inventory = mongoose.model('inventory');

module.exports = (app) => {
    app.get('/store/inventory', async (req, res) => {
        let inventory = await Inventory.find({});

        res.send(inventory);
    })
}