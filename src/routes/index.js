import express from 'express';


import userRoute from './user.route';
import bookRoute from './book.route'
import customerRoute from './customer.route'
import orderRoute from './order.route'
// import userRoute from './user.route';
const router = express.Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/book', bookRoute);
  router.use('/address', customerRoute)
  router.use('/order', orderRoute)
  // router.use('/cart', cartRoute);


  return router;
};

export default routes;
