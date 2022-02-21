import express from 'express'
import * as userController from '../controllers/cart.controll'
import {userAuth}  from '../middlewares/auth.middleware'


const router = express.Router();

router.post('/cart/:bookId', userAuth, userController.addCart)
router.get('/getcartbooks', userAuth, userController.getCart)
router.put('/updatecart/:bookId', userAuth, userController.updateCart)

export default router;