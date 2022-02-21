"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _transports = require("winston/lib/winston/transports");

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
var userAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken, verifyToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            bearerToken = req.headers['token'];

            if (bearerToken) {
              _context.next = 4;
              break;
            }

            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Authorization token is required'
            };

          case 4:
            _context.next = 6;
            return _jsonwebtoken["default"].verify(bearerToken, 'tokenvalue');

          case 6:
            verifyToken = _context.sent;
            req.body.data = verifyToken; //req.body.data.userId-To get userId

            next();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function userAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.userAuth = userAuth;