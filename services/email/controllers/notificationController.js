const User = require("../models/User");

const sendMessage = async (req, res, next) => {
  const id = req.body.id;
  const message = req.body.message;

  if (id && message) {
    const user = await User.findOne({ id: id });
    if (!user) return res.sendStatus(400);
    return res.status(200).json({ message: "Message Sent" });
  } else {
    return res.sendStatus(400);
  }
};

module.exports = sendMessage;
