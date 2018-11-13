const router = require("express").Router();
const resturantsController = require("../../controllers/resturantsController");
const request = require("request");
const { ZOMATO_API } = require("../../keys.js");

// Matches with "/api/restaurants"
router.route("/").get((req, res) => {
  // FOR TESTING
  // let lat = "38.909563";
  // let lon = "-77.023681";

  // Current location is passed through the req
  let lat = req.latlon.lat;
  let lon = req.latlon.lon;

  const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
  request(
    {
      headers: {
        "user-key": ZOMATO_API
      },
      uri: zomatoURL
    },
    (error, response, body) => {
      console.log(JSON.parse(body));
      return res.json(JSON.parse(body));
    }
  );
});

module.exports = router;
