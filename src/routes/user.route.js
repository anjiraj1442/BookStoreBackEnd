import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { selectuser } from '../middlewares/selectuser';
import { checkUser } from '../middlewares/checkuser.middleware';
const router = express.Router();

//route to get all users
// router.get('', userController.getAllUsers);

//route to create a new user
router.post('/user', newUserValidator, selectuser("User") , userController.newUser);

// route to create new admin
router.post('/admin',newUserValidator, selectuser("Admin"), userController.newUser);

// route to login user
router.post('/user-login',checkUser("User"), userController.login);

//route to login admin
router.post('/admin-login',checkUser("Admin"), userController.login);




export default router;
