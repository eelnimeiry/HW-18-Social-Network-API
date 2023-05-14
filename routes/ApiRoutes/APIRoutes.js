const router = require("express").Router();
const userRoutes = require("../UserRoutes/UserRoutes");
const thoughtRoutes = require("../ThoughtRoutes/ThoughtRoutes");

router.use("/users", userRoutes);

module.exports = router;
