"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newAddress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Address = _interopRequireDefault(require("../models/Address.model"));

var newAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var response, newaddress, data;
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
            newaddress = new _Address["default"]({
              addressType: body.addressType,
              fullAddress: body.fullAddress,
              city: body.city,
              state: body.state
            });
            _context.next = 4;
            return _Address["default"].create(newaddress);

          case 4:
            data = _context.sent;
            response.status = 201;
            response.success = true;
            response.message = 'Address Added';
            response.data = data;
            return _context.abrupt("return", response);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function newAddress(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.newAddress = newAddress;