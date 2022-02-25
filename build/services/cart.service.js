"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCart = exports.getCart = exports.addCart = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cart = _interopRequireDefault(require("../models/cart.model"));

var _book = _interopRequireDefault(require("../models/book.model"));

//add to cart
var addCart = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var response, defaultQuantity, checkBook, checkCart, _ref2, newCart, data, getArrayBook, _updatedBook, Total_Quantity, updatedBook, updated, _newBook, newBook;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {
              status: 201,
              success: true,
              message: '',
              data: ''
            }; // console.log(req.params.bookId);
            // console.log(req.params.bookId, 'bookId');
            // console.log(req.body.quantity, 'quantity');

            defaultQuantity = 1;

            if (req.body.quantity) {
              defaultQuantity = req.body.quantity;
            } else {
              defaultQuantity = 1;
            }
            /* 1.check for book availibilty */


            _context.next = 5;
            return _book["default"].findOne({
              _id: req.params.bookId
            });

          case 5:
            checkBook = _context.sent;
            console.log('availability----->', checkBook);

            if (!checkBook) {
              _context.next = 60;
              break;
            }

            /* 2.check if cart for user is present else create */
            console.log('userid', req.body);
            _context.next = 11;
            return _cart["default"].findOne({
              userId: req.body.data.userId
            });

          case 11:
            checkCart = _context.sent;
            //
            console.log(checkCart, 'checkcart is present or not');

            if (checkCart) {
              _context.next = 26;
              break;
            }

            //creating new cart
            newCart = new _cart["default"]({
              userId: req.body.data.userid,
              book: [(_ref2 = {
                bookId: req.params.bookId,
                quantity: defaultQuantity,
                bookName: checkBook.bookName,
                author: checkBook.author
              }, (0, _defineProperty2["default"])(_ref2, "quantity", checkBook.quantity), (0, _defineProperty2["default"])(_ref2, "price", checkBook.price), (0, _defineProperty2["default"])(_ref2, "discountPrice", checkBook.discountPrice), _ref2)],
              isPurchased: false
            }); // here i hv to pass name author values okk in check once model its correct or not

            console.log(newCart, 'new Cart created');
            _context.next = 18;
            return newCart.save();

          case 18:
            data = _context.sent;
            response.status = 201;
            response.success = true;
            response.message = 'Book Added to with new Cart';
            response.data = data;
            return _context.abrupt("return", response);

          case 26:
            _context.next = 28;
            return checkCart.book.filter(function (x) {
              return x.bookId === req.params.bookId;
            });

          case 28:
            getArrayBook = _context.sent;
            console.log(getArrayBook, 'got book from cart');

            if (!(getArrayBook.length != 0)) {
              _context.next = 46;
              break;
            }

            Total_Quantity = Number(getArrayBook[0].quantity) + Number(defaultQuantity); // remove the exsisting book in cart

            if (!(Total_Quantity < 0)) {
              _context.next = 35;
              break;
            }

            _context.next = 35;
            return _cart["default"].updateOne({
              userId: req.body.data.userId
            }, {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            });

          case 35:
            // insert the new book in cart
            updatedBook = (_updatedBook = {
              bookId: req.params.bookId,
              quantity: Total_Quantity
            }, (0, _defineProperty2["default"])(_updatedBook, "bookId", req.params.bookId), (0, _defineProperty2["default"])(_updatedBook, "quantity", defaultQuantity), (0, _defineProperty2["default"])(_updatedBook, "bookName", checkBook.bookName), (0, _defineProperty2["default"])(_updatedBook, "author", checkBook.author), (0, _defineProperty2["default"])(_updatedBook, "quantity", checkBook.quantity), (0, _defineProperty2["default"])(_updatedBook, "price", checkBook.price), (0, _defineProperty2["default"])(_updatedBook, "discountPrice", checkBook.discountPrice), _updatedBook);
            _context.next = 38;
            return _cart["default"].findOneAndUpdate({
              userId: req.body.data.userId
            }, {
              $addToSet: {
                book: updatedBook
              }
            });

          case 38:
            updated = _context.sent;
            response.status = 200;
            response.success = false;
            response.message = "Cart Updated hi ".concat(Total_Quantity);
            response.data = updated;
            return _context.abrupt("return", response);

          case 46:
            /* 4.cart doesnt contain book just pass book to book array & save*/
            console.log('else');
            newBook = (_newBook = {
              bookId: req.params.bookId,
              quantity: defaultQuantity
            }, (0, _defineProperty2["default"])(_newBook, "bookId", req.params.bookId), (0, _defineProperty2["default"])(_newBook, "quantity", defaultQuantity), (0, _defineProperty2["default"])(_newBook, "bookName", checkBook.bookName), (0, _defineProperty2["default"])(_newBook, "author", checkBook.author), (0, _defineProperty2["default"])(_newBook, "quantity", checkBook.quantity), (0, _defineProperty2["default"])(_newBook, "price", checkBook.price), (0, _defineProperty2["default"])(_newBook, "discountPrice", checkBook.discountPrice), _newBook);
            console.log(newBook, 'new bok');
            checkCart.book.push(newBook);
            console.log(checkCart, 'push result');
            _context.next = 53;
            return checkCart.save();

          case 53:
            response.status = 200;
            response.success = false;
            response.message = 'Book Added To Cart';
            response.data = ' ';
            return _context.abrupt("return", response);

          case 58:
            _context.next = 65;
            break;

          case 60:
            response.status = 200;
            response.success = false;
            response.message = 'Book Not Available';
            response.data = ' ';
            return _context.abrupt("return", response);

          case 65:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addCart(_x) {
    return _ref.apply(this, arguments);
  };
}(); //get all cart books


exports.addCart = addCart;

var getCart = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var response, checkCart;
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
            console.log(req.body.data.userId);
            _context2.next = 4;
            return _cart["default"].findOne({
              userId: req.body.data.userId
            });

          case 4:
            checkCart = _context2.sent;
            console.log('checkcart', checkCart);
            console.log(checkCart, 'checkcart is present or not');

            if (!checkCart) {
              _context2.next = 15;
              break;
            }

            response.status = 200;
            response.success = true;
            response.message = 'Books Fetched';
            response.data = checkCart;
            return _context2.abrupt("return", response);

          case 15:
            response.status = 200;
            response.success = true;
            response.message = 'No Active Cart';
            response.data = ' ';
            return _context2.abrupt("return", response);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCart(_x2) {
    return _ref3.apply(this, arguments);
  };
}(); //update book


exports.getCart = getCart;

var updateCart = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req) {
    var response, defaultQuantity, checkCart, newCart, data, getArrayBook, _updatedBook2, updatedBook, updated, newBook;

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
            defaultQuantity = req.body.quantity; //checkking the cart user is available

            _context3.next = 4;
            return _book["default"].findOne({
              userId: req.body.data.userId
            });

          case 4:
            checkCart = _context3.sent;

            if (checkCart) {
              _context3.next = 17;
              break;
            }

            // cart not present
            newCart = new _cart["default"]({
              userId: req.body.data.userId,
              book: [{
                bookId: req.params.bookId,
                quantity: defaultQuantity
              }],
              isParchased: false
            });
            _context3.next = 9;
            return newCart.save();

          case 9:
            data = _context3.sent;
            response.status = 201;
            response.success = true;
            response.message = 'Book Added to with new Cart';
            response.data = data;
            return _context3.abrupt("return", response);

          case 17:
            _context3.next = 19;
            return checkCart.book.filter(function (x) {
              return x.bookId === req.params.bookId;
            });

          case 19:
            getArrayBook = _context3.sent;

            if (!(getArrayBook.length != 0)) {
              _context3.next = 38;
              break;
            }

            if (!(defaultQuantity < 0)) {
              _context3.next = 26;
              break;
            }

            _context3.next = 24;
            return _cart["default"].updateOne({
              userId: req.body.data.userId
            }, {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            });

          case 24:
            _context3.next = 32;
            break;

          case 26:
            _context3.next = 28;
            return _cart["default"].updateOne({
              userId: req.body.data.userId
            }, {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            });

          case 28:
            //insert the new book in cart
            updatedBook = (_updatedBook2 = {
              bookId: req.params.bookId,
              quantity: defaultQuantity,
              bookName: checkBook.bookName,
              author: checkBook.author
            }, (0, _defineProperty2["default"])(_updatedBook2, "quantity", checkBook.quantity), (0, _defineProperty2["default"])(_updatedBook2, "price", checkBook.price), (0, _defineProperty2["default"])(_updatedBook2, "discountPrice", checkBook.discountPrice), _updatedBook2);
            _context3.next = 31;
            return _cart["default"].findOneAndUpdate({
              userId: req.body.data.userId
            }, {
              $addToSet: {
                book: updatedBook
              }
            });

          case 31:
            updated = _context3.sent;

          case 32:
            response.status = 200;
            response.success = false;
            response.message = 'Cart Updated ';
            return _context3.abrupt("return", response);

          case 38:
            // cart doesnt contain book
            newBook = {
              bookId: req.params.bookId,
              quantity: defaultQuantity
            };
            checkCart.book.push(newBook);
            _context3.next = 42;
            return checkCart.save();

          case 42:
            response.status = 200;
            response.success = false;
            response.message = 'Book Added To Cart';
            response.data = ' ';
            return _context3.abrupt("return", response);

          case 47:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateCart(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateCart = updateCart;