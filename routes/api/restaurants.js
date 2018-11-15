const router = require("express").Router();
const resturantsController = require("../../controllers/resturantsController");
const request = require("request");
const { ZOMATO_API } = require("../../keys.js");

// Matches with "/api/restaurants"
router.route("/").post((req, res) => {
  // Current location is passed through the req
  if (req.body) {
    if (req.body.lat && req.body.lon) {
      let lat = parseFloat(req.body.lat);
      let lon = parseFloat(req.body.lon);
      //API call to Zomato with the current coordinates
      const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}&start=0&count=20`;
      request(
        {
          headers: {
            "user-key": ZOMATO_API
          },
          uri: zomatoURL
        },
        (error, response, body) => {
          return res.json(JSON.parse(body));
        }
      );
    }
  } else {
    console.log("Error passing the current location to API");
  }
});

module.exports = router;
