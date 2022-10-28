const ShoppingItem = require("../models/ShoppingItem");

const addShoppingItem = async (req, res, next) => {
  const categories = req.body.categories;
  const name = req.body.name;
  const price = req.body.price;
  const image = req.body.image;
  const description = req.body.description;
  const brand = req.body.brand;
  const currentInventory = req.body.currentInventory;

  if (
    !(categories && name && price && description && brand && currentInventory)
  ) {
    return res.sendStatus(400);
  }

  try {
    const item = await ShoppingItem.create({
      categories,
      name,
      price,
      image,
      description,
      brand,
      currentInventory,
    });

    return res.json(item);
  } catch (err) {
    return res.sendStatus(500);
  }
};

const deleteShoppingItem = async (req, res, next) => {
  const id = req.params.id;
  if (!id) return res.sendStatus(400);
  try {
    const item = await ShoppingItem.deleteOne({ id: id });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
};

const getAllShoppingItems = async (req, res, next) => {
  try {
    const items = await ShoppingItem.find();
    return res.json({ items });
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

const updateShoppingItem = async (req, res, next) => {
  const id = req.params.id;
  const categories = req.body.categories;
  const name = req.body.name;
  const price = req.body.price;
  const image = req.body.image;
  const description = req.body.description;
  const brand = req.body.brand;
  const currentInventory = req.body.currentInventory;

  if (
    !(categories && name && price && description && brand && currentInventory)
  ) {
    return res.sendStatus(400);
  }

  try {
    const item = await ShoppingItem.updateOne(
      { id: id },
      {
        $set: {
          categories,
          name,
          price,
          image,
          description,
          brand,
          currentInventory,
        },
      }
    );
    return res.json(item);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = {
  addShoppingItem,
  deleteShoppingItem,
  getAllShoppingItems,
  updateShoppingItem,
};
