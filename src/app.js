// src/app.js
/**
 * Import dependencies
 */
import express from 'express';
import logger from 'morgan'; // Logs each server request to the console
import bodyParser from 'body-parser'; // Takes information from POST requests and puts it into an object
import methodOverride from 'method-override'; // Allows for PUT and DELETE methods to be used in browsers where they are not supported
import mongoose from 'mongoose'; // Wrapper for interacting with MongoDB
import path from 'path'; // File path utilities to make sure we're using the right type of slash (/ vs \)
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';

/**
 * Import controllers
 */
import mainController from './controllers/main';
//import pollController from './controllers/poll';

/**
 * Configure database
 */
mongoose.connect('mongodb://localhost:27017/pollingDB'); // Connect to MongoDB database for polling app.  
// Make sure mongod is running! If not, log an error and exit. 
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/**
 * Configure app
 */
let app = express(); // Creates an Express app

app.set('port', process.env.PORT || 3000); // Set port to 3000 or the provided PORT variable
app.set('views', path.join(__dirname, '..', 'views')); // Set our views directory to be `/views` (in the app root, which is one level above)
app.set('view engine', 'jade'); // Set our view engine to be Jade (so when we render these views, they are compiled with the Jade compiler)


app.use(session({ secret: 'dwebbywebweb1983' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.use(express.static(path.join(__dirname, '..', 'public'))); // Set the static files directory - /public will be / on the frontend
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(methodOverride()); // Allow PUT/DELETE

/**
 * Configure routes
 */
app.get('/', mainController.getIndex);
//app.get('/:template', mainController.getRootTemplate);
app.get('/templates/:template', mainController.getTemplate);

// ******    POLLS ROUTES ******
app.get('/polls', mainController.getAllPolls); // Handle GET request at /polls endpoint to retrieve all the polls
app.post('/polls', mainController.postNewPoll); // Handle POST request at /polls endpoint to create a new poll
app.get('/polls/:id', mainController.retrievePoll); // Handle GET request at /polls/:id endpoint to get a poll
app.delete('/polls/:id', mainController.deletePoll); // Handle DELETE request at /polls/:id endpoint to delete a poll


/**
 * Start app
 */
app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}!`);
});