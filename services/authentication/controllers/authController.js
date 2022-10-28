const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const User = require("../models/User");

dotenv.config();

const loginUser = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!(email && password))
    return res
      .status(400)
      .json({ message: "Username and password is required" });

  const foundUser = await User.findOne({ email: email });
  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    const roles = [foundUser.type];
    const payload = {
      UserInfo: { uID: foundUser.uid },
      aud: roles,
      iss: req.get("host"),
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "3600s",
    });

    return res.status(200).json({
      token: accessToken,
      roles: roles,
      uid: foundUser.uid,
      user: foundUser,
    });
  } else {
    return res.sendStatus(401);
  }
};

const registerUser = async (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const passwordRAW = req.body.password;
  const type = req.body.type;

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(passwordRAW, salt);

  try {
    const user = await User.create({
      email,
      username,
      password,
      type,
    });
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = { loginUser, registerUser };
