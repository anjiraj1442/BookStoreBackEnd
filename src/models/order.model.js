import { Schema, model } from 'mongoose';
const orderSchema = new Schema(
  {
    product_id: {
      type: String,
      required: true,
      min: 24,
      max: 24
    },
    product_name: {
      type: String,
      required: true
    },
    product_quantity: {
      type: Number,
      min: 1,
      example: 10,
      required: true
    },
    product_price: {
      type: Number,
      min: 1
    }
  },
  {
    timestamps: true
  }
);


export default model('Orders', orderSchema);
