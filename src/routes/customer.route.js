import express from 'express'
import * as customerController from '../controllers/customer.controller'
import * as validator from '../validators/user.validator'

const router = express.Router()

// route to add address
router.post('/address', validator.addressValidator , customerController.newAddress)

export default router