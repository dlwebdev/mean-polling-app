'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectFlash = require('connect-flash');

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _main = require('./controllers/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import pollController from './controllers/poll';

/**
 * Configure database
 */
// File path utilities to make sure we're using the right type of slash (/ vs \)
// Allows for PUT and DELETE methods to be used in browsers where they are not supported
// Logs each server request to the console
// src/app.js
/**
 * Import dependencies
 */
_mongoose2.default.connect('mongodb://localhost:27017/pollingDB'); // Connect to MongoDB database for polling app.  
// Make sure mongod is running! If not, log an error and exit. 


/**
 * Import controllers
 */
// Wrapper for interacting with MongoDB
// Takes information from POST requests and puts it into an object
_mongoose2.default.connection.on('error', function () {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/**
 * Configure app
 */
var app = (0, _express2.default)(); // Creates an Express app

app.set('port', process.env.PORT || 3000); // Set port to 3000 or the provided PORT variable
app.set('views', _path2.default.join(__dirname, '..', 'views')); // Set our views directory to be `/views` (in the app root, which is one level above)
app.set('view engine', 'jade'); // Set our view engine to be Jade (so when we render these views, they are compiled with the Jade compiler)

app.use((0, _expressSession2.default)({ secret: 'dwebbywebweb1983' })); // session secret
app.use(_passport2.default.initialize());
app.use(_passport2.default.session()); // persistent login sessions
app.use((0, _connectFlash2.default)()); // use connect-flash for flash messages stored in session

app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'public'))); // Set the static files directory - /public will be / on the frontend
app.use((0, _morgan2.default)('dev')); // Log requests to the console
app.use(_bodyParser2.default.json()); // Parse JSON data and put it into an object which we can access
app.use((0, _methodOverride2.default)()); // Allow PUT/DELETE

/**
 * Configure routes
 */
app.get('/', _main2.default.getIndex);
//app.get('/:template', mainController.getRootTemplate);
app.get('/templates/:template', _main2.default.getTemplate);

// ******    POLLS ROUTES ******
app.get('/polls', _main2.default.getAllPolls); // Handle GET request at /polls endpoint to retrieve all the polls
app.post('/polls', _main2.default.postNewPoll); // Handle POST request at /polls endpoint to create a new poll
app.get('/polls/:id', _main2.default.retrievePoll); // Handle GET request at /polls/:id endpoint to get a poll
app.delete('/polls/:id', _main2.default.deletePoll); // Handle DELETE request at /polls/:id endpoint to delete a poll

/**
 * Start app
 */
app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port') + '!');
});