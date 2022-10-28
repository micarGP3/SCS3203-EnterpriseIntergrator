const mongoose = require("mongoose");
const { uuid } = require("uuidv4");

const ShoppingItemSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuid(),
  },
  categories: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  currentInventory: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ShoppingItem", ShoppingItemSchema);
