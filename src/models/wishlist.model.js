import { Schema, model } from 'mongoose';
import Books  from '../models/book.model'

import mongoose from 'mongoose';
const wishListSchema = new Schema({
  userId: {
    type: String
  },
  book: [
    {
      bookId: {
        type: String
      },

      quantity: {
        type: Number
      },
      bookName: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      
      quantity: {
        type: Number
      },
      price: {
        type: Number
      },
      discountPrice: {
        type: Number
      },
    }
  ]
});

export default model('Wishlist', wishListSchema);
