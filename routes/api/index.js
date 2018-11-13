const router = require("express").Router();
const restRoutes = require("./restaurants");

// Book routes
router.use("/restaurants", restRoutes);

module.exports = router;
