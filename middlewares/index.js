const validation = require("./validation");
const controllsWrapper = require("./controllsWrapper");
const auth = require("./auth");
const fileUploadMiddleware = require("./fileUploadMiddleware");

module.exports = {
  validation,
  controllsWrapper,
  auth,
  fileUploadMiddleware,
};
