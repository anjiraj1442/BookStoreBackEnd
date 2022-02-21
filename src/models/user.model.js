import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      require: true,

      trim: true
    },
    phone: {
      type: Number,
      require: true,

      trim: true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
