const router = require("express").Router();
const showRoutes = require("./shows");
const userRoutes = require("./users");


// Show routes
router.use("/shows", showRoutes);

// User routes
router.use("/users", userRoutes)

module.exports = router;
