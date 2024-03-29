import { Schema, model } from 'mongoose';
const cartSchema = new Schema({
  userId: {
    type: String
  },
  book: [
    {
      bookId: {
        type: String
      }
    }
  ],
  isPurchased: {
    type: Boolean,
    default: false
  }
});

export default model('Cart', cartSchema);
