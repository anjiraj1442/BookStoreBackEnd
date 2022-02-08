import User from '../models/user.model';
import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config('../.env')
//create new user
export const newUser = async (body) => {
  const HashedPassword = await bcrypt.hash(body.Password, 10);
  body.Password = HashedPassword;
  const data = await User.create(body);
  return data;
};

// login in service file

export const login = async (body) => {
  const check = await User.findOne({ Email: body.Email });
  if (check) {
    const match = await bcrypt.compare(body.Password, check.Password);
    if (match) {
      const token = jwt.sign({ Email: check.Email, id: check._id, Role: check.Role }, 'tokenvalue', { expiresIn: '98h' });
      return token;
    } else {
      return 'Incorrect Password'
    }
  } else {
    return 'Not Registered Yet';
  }
};


//
