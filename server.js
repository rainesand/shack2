const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const passport = require('./passport');



const app = express();


//sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false //required

  })
)

app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Shack2");
// Start the API server
app.listen(PORT, function () {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});