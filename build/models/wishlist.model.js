"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _book = _interopRequireDefault(require("../models/book.model"));

var _ref;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var wishListSchema = new _mongoose.Schema({
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
  }), _ref)]
});

var _default = (0, _mongoose.model)('Wishlist', wishListSchema);

exports["default"] = _default;