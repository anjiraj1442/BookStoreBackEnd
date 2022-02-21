"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeWishlist = exports.newBook = exports.getWishlist = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _wishlist = _interopRequireDefault(require("../models/wishlist.model"));

var _book = _interopRequireDefault(require("../models/book.model"));

// add to wishlist
var newBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var response, checkBook, checkWishlist, wishlist, data, checkBookInWishlist, newWish;
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
            console.log(req.params);
            console.log(req.params.bookId, 'bookId'); //1.check for book availibilty

            _context.next = 5;
            return _book["default"].findOne({
              _id: req.params.bookId
            });

          case 5:
            checkBook = _context.sent;
            console.log(checkBook, 'availability');

            if (!checkBook) {
              _context.next = 51;
              break;
            }

            _context.next = 10;
            return _wishlist["default"].findOne({
              userId: req.body.data.id
            });

          case 10:
            checkWishlist = _context.sent;
            console.log(checkWishlist, 'checkWishlist'); //check if Wishlist for user is present

            if (checkWishlist) {
              _context.next = 25;
              break;
            }

            wishlist = new _wishlist["default"]({
              userId: req.body.data.id,
              book: [{
                bookId: req.params.bookId
              }]
            });
            console.log(wishlist, 'new wishlist');
            _context.next = 17;
            return _wishlist["default"].create(wishlist);

          case 17:
            data = _context.sent;
            response.status = 201;
            response.success = true;
            response.message = 'Book Added to Wishlist';
            response.data = data;
            return _context.abrupt("return", response);

          case 25:
            _context.next = 27;
            return checkWishlist.book.filter(function (x) {
              return x.bookId === req.params.bookId;
            });

          case 27:
            checkBookInWishlist = _context.sent;
            console.log(checkBookInWishlist, 'got book from cart', checkBookInWishlist.length, 'length');

            if (!(checkBookInWishlist.length == 0)) {
              _context.next = 44;
              break;
            }

            console.log('inside add book to existing wishlist');
            newWish = {
              bookId: req.params.bookId
            };
            console.log(newWish);
            checkWishlist.book.push(newWish);
            console.log(checkWishlist, 'push result');
            _context.next = 37;
            return checkWishlist.save();

          case 37:
            response.status = 200;
            response.success = false;
            response.message = 'Wishlist Updated';
            response.data = checkWishlist;
            return _context.abrupt("return", response);

          case 44:
            response.status = 200;
            response.success = false;
            response.message = 'Book Already Added';
            response.data = ' ';
            return _context.abrupt("return", response);

          case 49:
            _context.next = 56;
            break;

          case 51:
            //for book availibilty
            response.status = 200;
            response.success = false;
            response.message = 'Book Not Available';
            response.data = ' ';
            return _context.abrupt("return", response);

          case 56:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function newBook(_x) {
    return _ref.apply(this, arguments);
  };
}(); //get all Wishlist Books


exports.newBook = newBook;

var getWishlist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var response, checkWishlist;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = {
              status: 201,
              success: true,
              message: '',
              data: ''
            };
            _context2.next = 3;
            return _wishlist["default"].find({
              userId: req.body.data.id
            });

          case 3:
            checkWishlist = _context2.sent;
            console.log(checkWishlist, 'wisharr');

            if (!checkWishlist) {
              _context2.next = 13;
              break;
            }

            response.status = 200;
            response.success = true;
            response.message = 'Wishlist Books Fetched ';
            response.data = checkWishlist;
            return _context2.abrupt("return", response);

          case 13:
            response.status = 200;
            response.success = true;
            response.message = 'No Active Wishlist Found';
            return _context2.abrupt("return", response);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getWishlist(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //remove wishlist


exports.getWishlist = getWishlist;

var removeWishlist = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var response, checkWishlist, checkBookInWishlist;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = {
              status: 201,
              success: true,
              message: '',
              data: ''
            };
            console.log(req.params);
            console.log(req.params.bookId, 'bookId');
            _context3.next = 5;
            return _wishlist["default"].findOne({
              userId: req.data.id
            });

          case 5:
            checkWishlist = _context3.sent;
            console.log(checkWishlist, 'checking Wishlist present or absent'); //check if Wishlist for user is present

            if (!checkWishlist) {
              _context3.next = 30;
              break;
            }

            _context3.next = 10;
            return checkWishlist.book.filter(function (x) {
              return x.bookId === req.params.bookId;
            });

          case 10:
            checkBookInWishlist = _context3.sent;
            console.log(checkBookInWishlist, 'got book from cart');

            if (!(checkBookInWishlist.length !== 0)) {
              _context3.next = 23;
              break;
            }

            console.log('inside removing book from wishlist');
            _context3.next = 16;
            return _wishlist["default"].updateOne({
              userId: req.body.data.id
            }, {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            });

          case 16:
            response.status = 200;
            response.success = false;
            response.message = 'Book Removed from wishlist';
            response.data = checkWishlist;
            return _context3.abrupt("return", response);

          case 23:
            response.status = 200;
            response.success = false;
            response.message = 'Book Not Found In Wishlist';
            response.data = ' ';
            return _context3.abrupt("return", response);

          case 28:
            _context3.next = 35;
            break;

          case 30:
            response.status = 200;
            response.success = false;
            response.message = 'No Active Wishlist';
            response.data = ' ';
            return _context3.abrupt("return", response);

          case 35:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function removeWishlist(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.removeWishlist = removeWishlist;