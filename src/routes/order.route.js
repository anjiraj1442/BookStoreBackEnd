import express from 'express'

import * as orderController from '../controllers/order.controller'
import * as Validator from '../validators/user.validator'
import router from './user.route'

// route to order
router.post('/order', Validator.orderValidator, orderController.newOrder)


export default router