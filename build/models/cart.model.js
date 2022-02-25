"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = require("mongoose");

var _ref;

var cartSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  book: [(_ref = {
    bookId: {
      type: String
    },
    quantity: {
      type: Number
    },
    bookName: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }, (0, _defineProperty2["default"])(_ref, "quantity", {
    type: Number
  }), (0, _defineProperty2["default"])(_ref, "price", {
    type: Number
  }), (0, _defineProperty2["default"])(_ref, "discountPrice", {
    type: Number
  }), _ref)],
  isPurchased: {
    type: Boolean,
    "default": false
  }
});

var _default = (0, _mongoose.model)('Cart', cartSchema);

exports["default"] = _default;