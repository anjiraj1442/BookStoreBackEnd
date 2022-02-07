import { error } from 'winston';
import User from '../models/user.model';
import HttpStatus from 'http-status-codes';


export const checkUser = async  (req, res, next)=>{
     const checkUser = await User.findOne({
       Email: res.body.Email
     })
     const isMatch = checkUser.Role === "User"
     if(isMatch){
          next()
     }else{
          next(Error("Please enter correct details"));
     }
}