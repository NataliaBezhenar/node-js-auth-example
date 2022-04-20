const { User } = require("../../models");
const fs = require("fs/promises");
const path = require("path");
const { AVATAR_DIR } = require("../../filepath");

const updateAvatar = async (req, res) => {
  try {
    const { path: tempUpload, originalname } = req.file;
    const resUpload = path.join(AVATAR_DIR, originalname);
    await fs.rename(tempUpload, resUpload);
    const avatarUrl = path.join("public", "avatars", originalname);
    await User.findByIdAndUpdate(req.user._id, { avatar: avatarUrl });
  } catch (error) {
    await fs.unlink(tempUpload);
    console.log("in error");
    throw console.error;
  }
  res.json({
    status: "success",
    code: 200,
  });
};

module.exports = updateAvatar;
