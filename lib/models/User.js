'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mongoose = require('mongoose');
var _mongoose2 = _interopRequireDefault(mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');
var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var Schema = mongoose.Schema;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Create a schema for the Todo object
var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  polls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }]
});

userSchema.plugin(_mongooseUniqueValidator);

// Expose the model so that it can be imported and used in the controller (to search, delete, etc)
// src/models/Poll.js
exports.default = _mongoose2.default.model('User', userSchema);