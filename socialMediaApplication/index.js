// For more information visit https://www.npmjs.com/package/express
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const passport = require('passport');

require('./models/User');
require('./services/passport');
// DB Setup
// From Stack Overflow
// From user vkarpov15
// Mongoose maintainer here. If you're using Mongoose 5, please remove mongoose.Promise = global.Promise;. That line was used to address the below deprecation warning with promises in Mongoose 4:
// WARNING: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead
// It does nothing in Mongoose 5. You should only use mongoose.Promise in Mongoose 5 if you want to use your own promise library with Mongoose, like Bluebird or Q.
// There's also a little more about mongoose.Promise here: https://masteringjs.io/tutorials/mongoose/promise#the-mongoosepromise-property
// mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// Cookie lasts for 12 hours
app.use(
    cookieSession({
        keys: [keys.cookie],
        // Cookie option 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
);

app.use(passport.initialize());

app.use(passport.session());

require('./routes/authRoutes')(app);



// If using Amazon AWS website hosting services for example environment variables such as NODE_ENV and PORT are set by these services. 
// They would be undefined if not set in a code editor such as this in the package.json file for example.
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(err) {
        console.log("Error in setting up the server.");
    } else {
        console.log(`Listening on port ${PORT}`);
    }
});

