const express = require("express");

const { controllsWrapper, validation } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiRegisterSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  controllsWrapper(ctrl.register)
);

module.exports = router;
