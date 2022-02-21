"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderValidator = exports.newUserValidator = exports.bookValidatorn = exports.addressValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    fullname: _joi["default"].string().min(3).required(),
    email: _joi["default"].string().min(4).required(),
    password: _joi["default"].string().email().min(4).required(),
    phone: _joi["default"].string().min(4).required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}; // bookValidataor


exports.newUserValidator = newUserValidator;

var bookValidatorn = function bookValidatorn(req, res, next) {
  var schema = _joi["default"].object({
    bookName: _joi["default"].string().min(3).max(20).required().pattern(new RegExp('^[a-zA-Zs]+$')),
    author: _joi["default"].string().min(2).max(20).required().pattern(new RegExp('^[a-zA-Zs]+$')),
    quantity: _joi["default"].number().allow(null, ''),
    price: _joi["default"].number().allow(null, ''),
    discountPrice: _joi["default"].number().allow(null, ''),
    description: _joi["default"].string().allow(null, ''),
    wishlist: _joi["default"]["boolean"]().allow(null, '')
  });

  var _schema$validate2 = schema.validate(req.body),
      error = _schema$validate2.error,
      value = _schema$validate2.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}; //Address validator


exports.bookValidatorn = bookValidatorn;

var addressValidator = function addressValidator(req, res, next) {
  var schema = _joi["default"].object({
    addressType: _joi["default"].string().min(3).max(10).required().pattern(new RegExp('^[a-zA-Zs]+$')),
    fullAddress: _joi["default"].string().min(2).max(50).required().pattern(new RegExp('^[a-zA-Zs]+$')),
    city: _joi["default"].string().allow(null, ''),
    state: _joi["default"].string().allow(null, '')
  });

  var _schema$validate3 = schema.validate(req.body),
      error = _schema$validate3.error,
      value = _schema$validate3.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}; //order validator


exports.addressValidator = addressValidator;

var orderValidator = function orderValidator(req, res, next) {
  var schema = _joi["default"].object({
    product_id: _joi["default"].number().allow(null, ''),
    product_name: _joi["default"].string().min(2).max(50).required().pattern(new RegExp('^[a-zA-Zs]+$')),
    product_quantity: _joi["default"].number().allow(null, ''),
    product_price: _joi["default"].number().allow(null, '')
  });

  var _schema$validate4 = schema.validate(req.body),
      error = _schema$validate4.error,
      value = _schema$validate4.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.orderValidator = orderValidator;