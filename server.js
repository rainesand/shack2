const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const morgan = require("morgan");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);
  // Connect to the Mongo DB
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Shack2");
  // Start the API server
  app.listen(PORT, function() {
    console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
  });






  // username already taken and some checks code
  