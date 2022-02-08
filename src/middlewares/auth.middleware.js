import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    const TokenVerification = jwt.verify(bearerToken, 'tokenvalue');
     
    if (TokenVerification.Role === user) {
      req.body['USER_ID']=TokenVerification.ID;
      next();
    }else{
      throw {
        code: HttpStatus.UNAUTHORIZED,
        message: 'User Acess Denied'
      };
      
    }
    
  } catch (error) {
    next(error);
  }
};