'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Poll = require('../models/Poll');

var _Poll2 = _interopRequireDefault(_Poll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import the Poll model so we can query the DB

var pollController = {
  getIndex: function getIndex(req, res) {
    res.render('index'); // Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
    // We'll create this Jade file later
  },
  // Allows us to access our Angular templates (more on that later)
  getTemplate: function getTemplate(req, res) {
    res.render('templates/' + req.params.template);
  },
  getAllPolls: function getAllPolls(req, res) {
    _Poll2.default.find({}, function (err, polls) {
      if (err) {
        // Send the error to the client if there is one
        return res.send(err);
      }
      // Send polls in JSON format
      res.json(polls);
    });
  },
  postNewPoll: function postNewPoll(req, res) {
    // This creates a new poll using POSTed data (in req.body)
    _Poll2.default.create({
      name: req.body.name,
      creatorId: req.body.creatorId,
      options: req.body.options,
      dateAdded: req.body.dateAdded,
      done: false
    }, function (err, poll) {
      if (err) {
        return res.send(err);
      }
      _Poll2.default.find({}, function (err, polls) {
        if (err) {
          return res.send(err);
        }
        // Send list of all polls after new one has been created and saved
        res.json(polls);
      });
    });
  },
  deletePoll: function deletePoll(req, res) {
    _Poll2.default.remove({
      _id: req.params.id
    }, function (err, poll) {
      if (err) {
        return res.send(err);
      }
      _Poll2.default.find({}, function (err, polls) {
        if (err) {
          return res.send(err);
        }
        res.json(polls);
      });
    });
  }
};

exports.default = pollController;