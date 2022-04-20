const { User } = require("../../models");
const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { AVATAR_DIR } = require("../../filepath");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const [, extention] = originalname.split(".");
  const newFileName = `${uuidv4()}.${extention}`;

  try {
    const resUpload = path.join(AVATAR_DIR, "avatars", newFileName);
    await fs.rename(tempUpload, resUpload);
    const avatarUrl = path.join("public", "avatars", newFileName);

    await User.findByIdAndUpdate(req.user._id, { avatarUrl });
    res.json({ avatarUrl });
  } catch (error) {
    // await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
