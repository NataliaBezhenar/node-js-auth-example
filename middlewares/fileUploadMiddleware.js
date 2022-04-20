const multer = require("multer");
const path = require("path");

const { FILE_DIR } = require("../filepath");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileUploadMiddleware = multer({ storage });

module.exports = fileUploadMiddleware;
