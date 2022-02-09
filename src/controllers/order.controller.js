import * as orderService from '../services/order.service'


export const newOrder = async (req, res, next) => {
     try {
       const data = await orderService.newOrder(req.body);
       res.status(data.status).json(data);
     } catch (error) {
       next(error);
     }
   };