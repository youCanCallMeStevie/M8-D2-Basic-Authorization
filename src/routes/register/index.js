const express = require("express");
const registerRouter = express.Router();
const {
  registerController,
} = require("../../lib/utils/controllers/register");

//const { adminOnly, basic } = require("../../lib/utils/auth");
const validation = require("../../lib/validation/validationMiddleware");
const valSchema = require("../../lib/validation/validationSchema");

registerRouter.post("/", validation(valSchema.userSchema), registerController
);

module.exports = registerRouter;
