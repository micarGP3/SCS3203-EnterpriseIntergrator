// Imports
const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const authController = require("./controllers/authController");
const verifyJWT = require("./middleware/verifyJWT");

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

// Setup Router
app.post("/user", authController.registerUser);
app.post("/login", authController.loginUser);
app.post("/verify", verifyJWT);

const port = process.env.PORT || 9898;
app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
  try {
    mongoose.connect(
      `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.xjsygs6.mongodb.net/?retryWrites=true&w=majority`,
      () => {
        console.log("Connected to Database");
      }
    );
  } catch (err) {
    console.log(err);
  }
});
