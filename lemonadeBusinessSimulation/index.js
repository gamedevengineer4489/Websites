const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');

require('./config/db'); // requiring the database.
require('./services/passport');
const keys = require('./config/keys');

const app = express(); // Creates an express application



app.use(express.json()); // The body header appears as a reuslt. This allows us to handle client-side user data. 

app.use(cookieSession({
    keys: [keys.cookie],
    maxAge: 1000 * 60 * 60 * 24 
}));

app.use(passport.initialize()); // Initializing passport
app.use(passport.session()); // Creating a passport session


require('./routes/authRoutes')(app);
require('./routes/gameRoutes')(app);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));