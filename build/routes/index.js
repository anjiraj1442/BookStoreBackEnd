"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _book = _interopRequireDefault(require("./book.route"));

var _user = _interopRequireDefault(require("./user.route"));

var _cart = _interopRequireDefault(require("./cart.route"));

var _customer = _interopRequireDefault(require("./customer.route"));

var _order = _interopRequireDefault(require("./order.route"));

var _wishlist = _interopRequireDefault(require("./wishlist.route"));

var router = _express["default"].Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */


var routes = function routes() {
  // router.get('/', (req, res) => {
  //   res.json('Welcome To Bookstore Application');
  // });
  router.use('/book', _book["default"]);
  router.use('/user', _user["default"]);
  router.use('/cart', _cart["default"]);
  router.use('/wishlist', _wishlist["default"]);
  router.use('/customer', _customer["default"]);
  router.use('/order', _order["default"]);
  return router;
};

var _default = routes;
exports["default"] = _default;