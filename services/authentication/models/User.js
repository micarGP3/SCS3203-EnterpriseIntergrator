const mongoose = require("mongoose");
const { uuid } = require("uuidv4");

const UserSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
    default: uuid(),
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
