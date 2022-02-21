"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var bookSchema = new _mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  discountPrice: {
    type: Number
  },
  wishlist: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Books', bookSchema);

exports["default"] = _default;