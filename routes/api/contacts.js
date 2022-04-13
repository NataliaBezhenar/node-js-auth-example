const express = require("express");

const router = express.Router();

const { controllsWrapper } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");

// get all contacts
router.get("/", controllsWrapper(ctrl.getAll));

// add contact
router.post("/", controllsWrapper(ctrl.add));

module.exports = router;
