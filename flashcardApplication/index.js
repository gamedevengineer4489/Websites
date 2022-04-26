const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
require('custom-env').env(true);

const db = require('./config/database'); // requiring the database
require('./services/passport');
const keys = require('./config/keys');

const app = express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

app.use(express.json()); // The body header appears as a result. This allows us to handle client side user data.

db.query("CREATE TABLE IF NOT EXISTS users(googleid character varying, emailaddress character varying, firstname character varying, lastname character varying)");

app.use(cookieSession({
    keys: [keys.cookie],
    maxAge: 1000 * 60 * 60 * 24
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/flashCardRoutes')(app);

const PORT = process.env.PORT || 5000;


if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
} 


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));