import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().min(3).required(),
    email: Joi.string().min(4).required(),
    password: Joi.string().email().min(4).required(),
    phone: Joi.string().min(4).required()
   
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


//Address validator
export const addressValidator = (req, res, next) => {
  const schema = Joi.object({
    addressType: Joi.string()
      .min(3)
      .max(10)
      .required()
      .pattern(new RegExp('^[a-zA-Zs]+$')),

    fullAddress: Joi.string()
      .min(2)
      .max(50)
      .required()
      .pattern(new RegExp('^[a-zA-Zs]+$')),

    city: Joi.string().allow(null, ''),
    state: Joi.string().allow(null, '')
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

//order validator
export const orderValidator = (req, res, next) => {
  const schema = Joi.object({
    product_id: Joi.number().allow(null, ''),

    product_name: Joi.string()
      .min(2)
      .max(50)
      .required()
      .pattern(new RegExp('^[a-zA-Zs]+$')),

    product_quantity: Joi.number().allow(null, ''),

    product_price: Joi.number().allow(null, '')
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};