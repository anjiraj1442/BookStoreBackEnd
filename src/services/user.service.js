import User from '../models/user.model';
import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config('../.env')
//create new user
export const newUser = async (body) => {
  console.log("aghsghd",body);
  const HashedPassword = await bcrypt.hash(body.password, 10);
  body.password = HashedPassword;
  const data = await User.create(body);
  console.log("anji",data);
  return data;
};

// login in service file

export const login = async (body) => {
  const check = await User.findOne({ email: body.email });
  if (check) {
    const match = await bcrypt.compare(body.password, check.password);
    if (match) {
      const token = jwt.sign({ email: check.email, id: check._id}, 'tokenvalue', { expiresIn: '98h' });
     
      return token;
      
    } else {
      return 'Incorrect Password'
    }
  } else {
    return 'Not Registered Yet';
  }
};


//
