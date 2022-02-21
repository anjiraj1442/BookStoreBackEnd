import express from 'express';
import bookRoute from './book.route';
import userRoute from './user.route';
import cartRoute from './cart.route';
import customerRoute from './customer.route';
import orderRoute from './order.route';
import wishlistRoute from "./wishlist.route"

const router = express.Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  // router.get('/', (req, res) => {
  //   res.json('Welcome To Bookstore Application');
  // });
  router.use('/book', bookRoute);
  router.use('/user', userRoute);
  router.use('/cart', cartRoute);
  router.use('/wishlist', wishlistRoute);
  router.use('/customer', customerRoute);
  router.use('/order', orderRoute);

  return router;
};

export default routes;