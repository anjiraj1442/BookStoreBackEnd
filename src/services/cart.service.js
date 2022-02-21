import Cart from '../models/cart.model';
import Book from '../models/book.model';

//add to cart
export const addCart = async (req) => {
  let response = {
    status: 201,
    success: true,
    message: '',
    data: ''
  };

  // console.log(req.params.bookId);
  // console.log(req.params.bookId, 'bookId');
  // console.log(req.body.quantity, 'quantity');
  let defaultQuantity = 1;
  if (req.body.quantity) {
    defaultQuantity = req.body.quantity;
  } else {
    defaultQuantity = 1;
  }

  /* 1.check for book availibilty */
  let checkBook = await Book.findOne({ _id: req.params.bookId });

  console.log(checkBook, 'availability');

  if (checkBook) {
    /* 2.check if cart for user is present else create */
    console.log('userid', req.body);
    let checkCart = await Cart.findOne({ userId: req.body.data.id }); //

    console.log(checkCart, 'checkcart is present or not');

    if (!checkCart) {
      //creating new cart
      let newCart = new Cart({
        userId: req.body.data.id,
        book: [{ bookId: req.params.bookId, quantity: defaultQuantity }],
        isPurchased: false
      }); // here i hv to pass name author values okk in check once model its correct or not

      console.log(newCart, 'new Cart created');

      const data = await newCart.save();

      response.status = 201;
      response.success = true;
      response.message = 'Book Added to with new Cart';
      response.data = data;
      return response;
    } else {
      //cart present

      //check if book is present in cart
      const getArrayBook = await checkCart.book.filter(
        (x) => x.bookId === req.params.bookId
      );

      console.log(getArrayBook, 'got book from cart');

      if (getArrayBook.length != 0) {
        const Total_Quantity =
          Number(getArrayBook[0].quantity) + Number(defaultQuantity);

        // remove the exsisting book in cart
        if (Total_Quantity < 0) {
          // remove the existing book
          await Cart.updateOne(
            { userId: req.body.data.id },
            {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            }
          );
        }

        // insert the new book in cart
        const updatedBook = {
          bookId: req.params.bookId,
          quantity: Total_Quantity
        };

        const updated = await Cart.findOneAndUpdate(
          {
            userId: req.body.data.id
          },
          {
            $addToSet: {
              book: updatedBook
            }
          }
        );

        response.status = 200;
        response.success = false;
        response.message = `Cart Updated hi ${Total_Quantity}`;
        response.data = updated;
        return response;
      } else {
        /* 4.cart doesnt contain book just pass book to book array & save*/
        console.log('else');

        const newBook = {
          bookId: req.params.bookId,
          quantity: defaultQuantity
        };

        console.log(newBook, 'new bok');

        checkCart.book.push(newBook);

        console.log(checkCart, 'push result');

        await checkCart.save();

        response.status = 200;
        response.success = false;
        response.message = 'Book Added To Cart';
        response.data = ' ';
        return response;
      }
    }
  } else {
    response.status = 200;
    response.success = false;
    response.message = 'Book Not Available';
    response.data = ' ';
    return response;
  }
};

//get all cart books
export const getCart = async (req) => {
  let response = {
    status: 201,
    success: true,
    message: '',
    data: ''
  };

  let checkCart = await Cart.findOne({ userId: req.body.data.id });

  console.log(checkCart, 'checkcart is present or not');
  if (checkCart) {
    response.status = 200;
    response.success = true;
    response.message = 'Books Fetched';
    response.data = checkCart;
    return response;
  } else {
    response.status = 200;
    response.success = true;
    response.message = 'No Active Cart';
    response.data = ' ';
    return response;
  }
};

//update book
export const updateCart = async (req) => {
  let response = {
    status: 201,
    success: true,
    message: '',
    data: ''
  };

  let defaultQuantity = 1;
  defaultQuantity = req.body.quantity;
  //checkking the book is available
  let checkBook = await Book.findOne({ _id: req.params.bookId });

  if (checkBook) {
    // checking the book is in cart or not
    let checkCart = await Cart.findOne({ userId: req.body.data.id });
    if (checkCart) {
      //creating new cart
      let newCart = new Cart({
        userId: req.body.data.id,
        book: [{ bookId: req.params.bookId, quantity: defaultQuantity }],
        isPurchased: false
      });

      const data = await newCart.save();
      response.status = 201;
      response.success = true;
      response.message = 'Book Added to with new Cart';
      response.data = data;
      return response;
    }else{
      const getArrayBook = await checkCart.book.filter(
        (x) => x.bookId === req.params.bookId
      );
      if(getArrayBook.length != 0){
        if(defaultQuantity<=0){
          await Cart.updateOne(
            { userId: req.body.data.userId },
            {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            }
          );
        }else{
           // remove the exsisting book in cart
           await Cart.updateOne(
            { userId: req.body.data.userId },
            {
              $pull: {
                book: {
                  bookId: req.params.bookId
                }
              }
            }
          );
           // insert the new book in cart
           const updatedBook = {
            bookId: req.params.bookId,
            quantity: defaultQuantity
          };
          const updated = await Cart.findOneAndUpdate(
            {
              userId: req.body.data.userId
            },
            {
              $addToSet: {
                book: updatedBook
              }
            }
          );
        }
        response.status = 200;
        response.success = false;
        response.message = 'Cart Updated ';
        return response;

      }else{
         /* 4.cart doesnt contain book just pash book to book array & save*/

         const newBook = {
          bookId: req.params.bookId,
          quantity: defaultQuantity
        };

        checkCart.book.push(newBook);

        await checkCart.save();

        response.status = 200;
        response.success = false;
        response.message = 'Book Added To Cart';
        response.data = ' ';
        return response;
      }
    }
  }else{
    response.status = 404;
    response.success = false;
    response.message = 'Book Not Available';
    response.data = ' ';
    return response;
  }
};
