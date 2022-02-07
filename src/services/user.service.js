import User from '../models/user.model';
import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv';
// dotenv.config('../.env')
//create new user
export const newUser = async (body) => {
  const checkUser = await User.find({
    Email: body.Email
  });
  if (checkUser) {
    throw {
      code: HttpStatus.NOT_FOUND,
      message: 'user already exsist'
    };
  } else {
    let newUser = new User({
      FirstName: body.FirstName,
      LastName: body.LastName,
      Email: body.Email,
      Password: HashedPassword
    });
    console.log(newUser);
    const unHashedPassword = body.Password;
    const saltRound = 10;
    const HashedPassword = await bcrypt.hash(unHashedPassword, saltRound);
    body.Password = HashedPassword;
    const savedata = await User.create(newUser)
    return savedata;
  }
};

// login in service file

export const login = async (body) => {
  const mailVerify = await User.find({
    Email: body.Email
  });
  console.log('hi');
  
  const HashedPassword = mailVerify.Password;
  const EnterPassword = body.Password;
  const isMatch = await bcrypt.compare(EnterPassword, HashedPassword);
  console.log(isMatch);
  if (isMatch) {
    const token = jwt.sign(
      {
        Email: mailVerify.Email,
        ID: mailVerify._id,
        Role: mailVerify.Role
      },
      'tokenvalue'
    );

    return token;
  } else {
    throw {
      code: HttpStatus.UNAUTHORIZED,
      message: 'Please enter corret Password'
    };
  }
};
