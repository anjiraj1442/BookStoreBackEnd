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
        type : mongoose.Schema.Types.ObjectId,
        ref:"Books"
      },
      price: {
        type: Number
      }
    }
  ]
});

export default model('Wishlist', wishListSchema);
