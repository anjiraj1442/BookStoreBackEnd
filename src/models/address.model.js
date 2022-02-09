import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
  {
    addressType: {
      type: String
    },
    fullAddress: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Customers', customerSchema);
