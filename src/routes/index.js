import express from 'express';


import userRoute from './user.route';
import bookRoute from './book.route'
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

  return router;
};

export default routes;
