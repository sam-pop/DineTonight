const router = require("express").Router();
const resturantsController = require("../../controllers/resturantsController");

// Matches with "/api/restaurants"
router.route("/").get(resturantsController.findAll);

module.exports = router;
