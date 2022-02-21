import * as wishlistService from '../services/wishlist.service';

export const newBook = async (req, res, next) => {
  try {
    const data = await wishlistService.newBook(req);
    res.status(data.status).json(data);
  } catch (error) {
    next(error);
  }
};

export const getWishlist = async (req, res, next) => {
  try {
    const data = await wishlistService.getWishlist(req);
    res.status(data.status).json(data);
  } catch (error) {
    next(error);
  }
};

export const removeWishlist = async (req, res, next) => {
  try {
    let data = await wishlistService.removeWishlist(req);
    res.status(data.status).json(data);
  } catch (error) {
    next(error);
  }
};
