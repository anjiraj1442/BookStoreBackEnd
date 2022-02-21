import * as cartService from '../services/cart.service';

/**
 * Controller to create a new Book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addCart = async (req, res, next) => {
  try {
    const data = await cartService.addCart(req);
    res.status(data.status).json(data);
  } catch (error) {
    next(error);
  }

  // not an issue. pass th cart values not understang mam
};

//get cart items
/**
 * Controller to get all Books available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCart = async (req, res, next) => {
  try {
    const data = await cartService.getCart(req);
    console.log(data, 'ggg');
    res.status(data.status).json(data);
  } catch (error) {
    next(error);
  }
};

//update cart items
/**
 * Controller to update a Book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateCart = async (req, res, next) => {
  try {
    const data = await cartService.updateCart(req);
    res.status(data.status).json(data);
  } catch (error) {
    next(error);
  }
};
