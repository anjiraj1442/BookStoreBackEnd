import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { Console } from 'winston/lib/winston/transports';

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
    let bearerToken = req.headers['token'];
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };

    const verifyToken = await jwt.verify(bearerToken, 'tokenvalue');
    req.body.data = verifyToken;
    //req.body.data.userId-To get userId
    next();
  } catch (error) {
    next(error);
  }
};

