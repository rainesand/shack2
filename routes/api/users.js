const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");


// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create)


// Login route

router
  .route("/login")
  .post(passport.authenticate("local"))
  .then((res,req) => {
    res.json(req.body);
  })

// POST user with "/api/users"
// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
