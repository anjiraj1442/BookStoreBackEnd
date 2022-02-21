import express from 'express';
import * as userController from '../controllers/user.controller';
import * as Validator from '../validators/user.validator';

const router = express.Router();

//route to add book
router.post('/signup',  userController.newUser);
router.post('/signin',  userController.login);

export default router;
