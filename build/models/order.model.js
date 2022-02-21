"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var orderSchema = new _mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    min: 24,
    max: 24
  },
  product_name: {
    type: String,
    required: true
  },
  product_quantity: {
    type: Number,
    min: 1,
    example: 10,
    required: true
  },
  product_price: {
    type: Number,
    min: 1
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Orders', orderSchema);

exports["default"] = _default;