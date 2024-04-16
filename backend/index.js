const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const Singlerouter = require("./route.js");

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

// Route setup
app.use(Singlerouter);

// MongoDB connection and server startup
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is listening on port " + PORT);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
})();
