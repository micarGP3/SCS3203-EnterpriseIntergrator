const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const shoppingItemController = require("./controllers/shoppingItemController");
const authenticate = require("./middlewares/authenticate");

// Get the env file
dotenv.config();

// Import routers
// import auth from "./routes/auth";

// Start express app
const app = express();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: ["https://micar-frontend.vercel.app", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post("/item", authenticate, shoppingItemController.addShoppingItem);
app.patch("/item/:id", authenticate, shoppingItemController.updateShoppingItem);
app.get("/item", authenticate, shoppingItemController.getAllShoppingItems);
app.delete(
  "/item/:id",
  authenticate,
  shoppingItemController.deleteShoppingItem
);

const port = process.env.PORT || 9898;
app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
  mongoose.connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.xjsygs6.mongodb.net/?retryWrites=true&w=majority`,
    () => {
      console.log("Connected to Database");
    }
  );
});
