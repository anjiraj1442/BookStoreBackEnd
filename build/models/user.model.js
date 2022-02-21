"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  fullname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  phone: {
    type: Number,
    require: true,
    trim: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;