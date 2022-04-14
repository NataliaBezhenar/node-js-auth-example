const express = require("express");

const { auth, controllsWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/current", auth, controllsWrapper(ctrl.getCurrent));

module.exports = router;
