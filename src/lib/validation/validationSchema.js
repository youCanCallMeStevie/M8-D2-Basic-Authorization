const Joi = require("joi");
const schemas = {
  userSchema: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(6).required()
  }),
}
module.exports = schemas;
