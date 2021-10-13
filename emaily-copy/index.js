// Requiring in the apis that need to be used.
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// Database models(content to be stored or key-value pairs that are used to store data on the database) 
require('./models/User');
require('./models/Recipient');
require('./models/Survey');
// Using passport services.
require('./services/passport');

// Connecting to a mongoDB database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

// Starting the express server. The express server parses incoming requests with JSON palyloads and is based on body-parser.
// From the documentation online:
// "Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.""
// "A new body object containing the parsed data is populated on the request object after the middleware(i.e. req.body), or an 
// empty object({}). If there was no body to parse, the Content-Type was not matched or an error occured."
const app = express();

// Need these two apis for authentication
// We use the body parser api to get access to data stored on a request body property. 
// From the documentation: "Parse incoming request bodies in a middleware before your handlers, available under the req.body propery".
// Also from the documentation: "As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting"
// bodyParser.json only parses json and only looks at requests where the Content-Type header matches the type opeion. 

app.use(bodyParser.json());

// Cookie-session is a simple cookie-bases session middleware. 
// From the documentation: "This module stores the session data on the client within a cookie, 
// while a module like express-session stores only a session identifier on the client within  a cookie and stores the session data on the server, typically on a database"

 
app.use(
    cookieSession({
        keys: [keys.cookie],
        // Cookie option 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
);

// Initialize passport
app.use(passport.initialize());
// Since this application uses persistent login sessions, passport.session() is used here.
app.use(passport.session());

// The express application uses these routes to do patch, put, get, delete, post requests. 
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// If using Amazon AWS website hosting services for example environment variables such as NODE_ENV and PORT are set by these services. 
// They would be undefined if not set in a code editor such as this in the package.json file for example.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// The server-side of this application is hosted on https://www.localhost:5000/ during development and on another port if on Amazon AWS for instance. 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening on port 5000."))

