const mongoose = require('mongoose');
const CLOTHES = require('../models/storeModels/Clothes');
const FILMS = require('../models/storeModels/Films');
const GAMES = require('../models/storeModels/Games');
const SOUVENIRS = require('../models/storeModels/Souvenirs');

module.exports = (app) => {
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
}