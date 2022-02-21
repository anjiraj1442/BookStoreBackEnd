"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var customerSchema = new _mongoose.Schema({
  addressType: {
    type: String
  },
  fullAddress: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Customers', customerSchema);

exports["default"] = _default;