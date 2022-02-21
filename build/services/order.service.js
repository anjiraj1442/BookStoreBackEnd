"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newOrder = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _order = _interopRequireDefault(require("../models/order.model"));

var newOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var response, newOrder, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {
              status: 201,
              success: true,
              message: '',
              data: ''
            };
            newOrder = new _order["default"]({
              product_id: body.product_id,
              product_name: body.product_name,
              product_quantity: body.product_quantity,
              product_price: body.product_price
            });
            _context.next = 4;
            return _order["default"].create(newOrder);

          case 4:
            data = _context.sent;
            response.status = 201;
            response.success = true;
            response.message = 'Order Added';
            response.data = data;
            return _context.abrupt("return", response);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function newOrder(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.newOrder = newOrder;