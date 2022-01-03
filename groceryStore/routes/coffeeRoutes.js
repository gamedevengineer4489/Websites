const mongoose = require('mongoose');
const Coffee = mongoose.model('coffee');

module.exports = (app) => {
    app.get('/coffee/inventory', async (req, res) => {
        let coffee = await Coffee.find({});
        res.send(coffee);
    })
}