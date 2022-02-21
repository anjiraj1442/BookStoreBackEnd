"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var cartSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  book: [{
    bookId: {
      type: String
    }
  }],
  isPurchased: {
    type: Boolean,
    "default": false
  }
});

var _default = (0, _mongoose.model)('Cart', cartSchema);

exports["default"] = _default;