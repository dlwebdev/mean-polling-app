'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mongoose = require('mongoose');
var _mongoose2 = _interopRequireDefault(mongoose);

var Schema = mongoose.Schema;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Create a schema for the Todo object
var pollSchema = new Schema({
  name: String,
  creatorId: String,
  options: Array,
  dateAdded: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});
// Expose the model so that it can be imported and used in the controller (to search, delete, etc)
// src/models/Poll.js
exports.default = _mongoose2.default.model('Poll', pollSchema);