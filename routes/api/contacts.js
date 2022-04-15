const express = require("express");

const router = express.Router();

const { auth, controllsWrapper } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");

// get all contacts
router.get("/", auth, controllsWrapper(ctrl.getAll));

// add contact
router.post("/", auth, controllsWrapper(ctrl.add));

module.exports = router;
