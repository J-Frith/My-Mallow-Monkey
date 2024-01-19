const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const monkeyRouter = require("./routes/monkey");

// Set up connection to environment variables
dotenv.config({ path: ".env" });

// Create an express app
const app = express();

// Determine server port
app.set("port", process.env.PORT || 3005);

// Set up MongoDB connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

// Set up middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Set up route redirects
app.use("/monkey", monkeyRouter);

// 404 error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
