const express = require("express");

const { fileUploadMiddleware, controllsWrapper } = require("../../middlewares");
const { files: ctrl } = require("../../controllers");

const router = express.Router();

/*
 POST api/files/upload
 content-type: multipart/form-data
 */
router.post(
  "/upload",
  fileUploadMiddleware.single("avatar"),
  controllsWrapper(ctrl.upload)
);

module.exports = router;
