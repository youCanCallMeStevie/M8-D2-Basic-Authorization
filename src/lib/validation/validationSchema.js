const Joi = require("joi");
const schemas = {
  userSchema: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('admin', 'user').required(),
  }),
}
module.exports = schemas;
