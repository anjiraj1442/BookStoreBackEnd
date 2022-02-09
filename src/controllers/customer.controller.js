import * as addressService from '../services/customer.service'

export const newAddress = async (req, res, next) => {
     try {
       const data = await addressService.newAddress(req.body);
       res.status(data.status).json(data);
     } catch (error) {
       next(error);
     }
   };