import Cart from '../models/cart.model'
import Book from '../models/book.model'

// add to cart
export const addCart = async (req) =>{
     let response = {
          status: 201,
          success: true,
          message: '',
          data: ''
     }

     console.log(req.params.bookId);
     //1 check book is available
    let checkBook = await Book.findOne({ _id: req.bookId
    })


}