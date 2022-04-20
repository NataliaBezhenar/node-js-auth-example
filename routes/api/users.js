const express = require("express");

const {
  auth,
  controllsWrapper,
  fileUploadMiddleware,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/current", auth, controllsWrapper(ctrl.getCurrent));
router.patch(
  "/avatars",
  auth,
  fileUploadMiddleware.single("avatar"),
  controllsWrapper(ctrl.updateAvatar)
);

module.exports = router;
