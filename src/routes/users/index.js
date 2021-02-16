const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsersController,
  getMyUserInfoController,
  editMyUserInfoController,
  deleteMyUserInfoController,
} = require("../../lib/utils/controllers/users");

const { adminOnly, basic } = require("../../lib/utils/auth");
const validation = require("../../lib/validation/validationMiddleware");
const valSchema = require("../../lib/validation/validationSchema");

usersRouter.get("/", basic, adminOnly, getAllUsersController);

usersRouter.get("/me", basic, getMyUserInfoController );
usersRouter.put("/me", basic, validation(valSchema.userSchema), editMyUserInfoController)
usersRouter.delete("/me", basic, deleteMyUserInfoController );


module.exports = usersRouter;
