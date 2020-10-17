const router = require("express").Router();
const User = require("../../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("This user does not exist");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send(user);
          console.log(req.user, "Successfully Authenticated");
        });
      }
    })(req, res, next);
  });
