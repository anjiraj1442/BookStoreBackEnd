import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FirstName: Joi.string().min(3).required(),
    LastName: Joi.string().min(4).required(),
    Email: Joi.string().email().min(4).required(),
    Password: Joi.string().min(4).required(),
    Role: Joi.string(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};


// bookValidataor
export const bookValidatorn= (req,res,next)=>{
  const schema = Joi.object({
    bookName: Joi.string()
      .min(3)
      .max(20)
      .required()
      .pattern(new RegExp('^[a-zA-Zs]+$')),

    author: Joi.string()
      .min(2)
      .max(20)
      .required()
      .pattern(new RegExp('^[a-zA-Zs]+$')),

    quantity: Joi.number().allow(null, ''),
    price: Joi.number().allow(null, ''),
    discountPrice: Joi.number().allow(null, ''),
    description: Joi.string().allow(null, ''),
    wishlist: Joi.boolean().allow(null, '')
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}