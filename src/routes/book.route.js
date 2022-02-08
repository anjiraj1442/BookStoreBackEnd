import express from 'express'
import * as bookController from '../controllers/book.controll'
import * as validataor from '../validators/user.validator'



const router = express.Router();
// route to add book
router.post('/addbook', validataor.bookValidatorn, bookController.newBook)

//route to add book
router.get('/getbook', bookController.getBooks);
export default router;