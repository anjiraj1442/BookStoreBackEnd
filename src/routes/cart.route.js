import express from 'express'
import * as userController from '../controllers/'
import userAuth from '../middlewares/auth.middleware'


const router = express.Router();

router.post('/addcart/:bookId', userAuth, userController.addcart)