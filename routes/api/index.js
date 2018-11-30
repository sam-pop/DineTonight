const router = require("express").Router();
const restRoutes = require("./restaurants");
const userRoutes = require("./user");

// ./api routes
router.use("/restaurants", restRoutes);
router.use("/user", userRoutes);

module.exports = router;
