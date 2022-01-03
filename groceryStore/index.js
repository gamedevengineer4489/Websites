const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/Coffee');
require('./models/Inventory');
require('./models/Sale');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        keys: [keys.cookie],
        maxAge: 1000 * 60 * 60 * 24 * 30
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/coffeeRoutes')(app);
require('./routes/authRoutes')(app); // the express application is the input here.
require('./routes/storeRoutes')(app); // the express application is the input here. 
require('./routes/billingRoutes')(app);

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
