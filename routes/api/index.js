const router = require("express").Router();
const restRoutes = require("./restaurants");

// ./api routes
router.use("/restaurants", restRoutes);

module.exports = router;
