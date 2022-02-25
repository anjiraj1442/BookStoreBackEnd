import { Schema, model } from 'mongoose';
const cartSchema = new Schema({
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
  ],
  isPurchased: {
    type: Boolean,
    default: false
  }
});

export default model('Cart', cartSchema);
