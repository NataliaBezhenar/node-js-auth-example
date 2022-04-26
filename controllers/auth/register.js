const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const gravatar = require("gravatar");
const { v4 } = require("uuid");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exists`);
  }
  const verificationToken = v4();
  console.log(verificationToken);
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: { email, name, avatarURL },
  });
};

module.exports = register;
