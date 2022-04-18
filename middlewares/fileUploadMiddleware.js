const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("./tmp"));
  },
  filename: (req, file, cb) => {
    const [, extention] = file.originalname.split(".");
    cb(null, `${uuidv4()}.${extention}`);
  },
});

const fileUploadMiddleware = multer({ storage });

module.exports = fileUploadMiddleware;
