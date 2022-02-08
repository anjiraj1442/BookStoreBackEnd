
// select the option from admin or user
export const selectuser = (user) => {
     return async (req, res, next) => {
       try {
         req.body.Role = user;
         next();
       } catch (error) {
         next(error);
       }
     };
   };