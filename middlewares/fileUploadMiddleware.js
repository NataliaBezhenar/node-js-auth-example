const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const { FILE_DIR } = require("../filepath");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    //const [, extention] = file.originalname.split(".");
    cb(
      null,
      file.originalname
      // `${uuidv4()}.${extention}`
    );
  },
});

const fileUploadMiddleware = multer({ storage });

module.exports = fileUploadMiddleware;