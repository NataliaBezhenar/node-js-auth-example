const express = require("express");

const { controllsWrapper, validation } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  controllsWrapper(ctrl.register)
);

router.post("/login", validation(joiLoginSchema), controllsWrapper(ctrl.login));

module.exports = router;
