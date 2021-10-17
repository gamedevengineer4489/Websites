// This is the minimum amount of code to upload to a service like Heroku.
// Requiring in the apis that need to be used.
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const passportLocalMongoose = require('passport-local-mongoose');
const expressSession = require('express-session');
const cookieSession = require('cookie-session');

// Database models(content to be stored or key-value pairs that are used to store data on the database) 
require('./models/User');
require('./models/Blog');
require('./models/customUsers');
// Using passport services.
require('./services/passport');

// Connecting to a mongoDB database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

// Starting the express server. The express server parses incoming requests with JSON palyloads and is based on body-parser.
// From the documentation online:
// "Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.""
// "A new body object containing the parsed data is populated on the request object after the middleware(i.e. req.body), or an 
// empty object({}). If there was no body to parse, the Content-Type was not matched or an error occured."
const app = express();

// From Stack Overflow: When hosting your application on another service (like Heroku, Nodejitsu, and AWS), your host may independently configure the process.env.PORT variable for you; after all, your script runs in their environment.
// Amazon's Elastic Beanstalk does this. 
// If you try to set a static port value like 3000 instead of process.env.PORT || 3000 where 3000 is your static setting, then your application will result in a 500 gateway error because Amazon is configuring the port for you.
// Also the environment variable NODE_ENV is set to 'production' when your application is hosted on another service like this.
// Use port 5000 or another port unless there exists a preconfigured port.
// app.get('/', function(req, res) {
//     // no request is being made right now.
//     // So we send a response
//     res.send({'Language': 'German'});
// })

// Need these two apis for authentication
// We use the body parser api to get access to data stored on a request body property. 
// From the documentation: "Parse incoming request bodies in a middleware before your handlers, available under the req.body propery".
// Also from the documentation: "As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting"
// bodyParser.json only parses json and only looks at requests where the Content-Type header matches the type opeion. 
app.use(bodyParser.json());

// app.use(expressSession({
//     name: 'session-id',
//     secret: '123-456-789',
//     saveUninitialized: false,
//     resave: false
// }))

// Cookie-session is a simple cookie-bases session middleware. 
// From the documentation: "This module stores the session data on the client within a cookie, 
// while a module like express-session stores only a session identifier on the client within  a cookie and stores the session data on the server, typically on a database"
app.use(
    cookieSession({
        keys: [keys.cookie],
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
)

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// The express application uses these routes to do patch, put, get, delete, post requests. 
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

// The server-side of this application is hosted on https://www.localhost:5000/ during development and on another port if on Amazon AWS for instance. 
const PORT = process.env.PORT || 5000;
console.log(process.env);
app.listen(PORT, () => console.log(`listening on port ${PORT}`));