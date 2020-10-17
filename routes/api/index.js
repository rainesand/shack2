const router = require("express").Router();
// const showRoutes = require("./shows");
const userRoutes = require("./users");
// const postRoutes = require("./posts");
// const loginRoutes = require("./login");

// // Show routes
// router.use("/shows", showRoutes);

// User routes
router.use("/users", userRoutes);

// // Post routes
// router.use("/posts", postRoutes);

// // Login routes
// router.use("/login", loginRoutes);

module.exports = router;
