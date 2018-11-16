const router = require("express").Router();
const resturantsController = require("../../controllers/resturantsController");
const request = require("request");

// Matches with "/api/restaurants"
router.route("/").post((req, res) => {
  let zomatoBODY;
  let yelpBODY;

  // Current location is passed through the req
  if (req.body) {
    if (req.body.lat && req.body.lon) {
      //Coordinates
      let lat = parseFloat(req.body.lat);
      let lon = parseFloat(req.body.lon);
      // Construct API urls
      const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
      const yelpURL = ` https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${lon}&open_now=true&radius=1000`;
      //API call to Zomato
      request(
        {
          headers: {
            "user-key": process.env.ZOMATO_API
          },
          uri: zomatoURL
        },
        (error, response, body) => {
          zomatoBODY = JSON.parse(body);
          return res.json(JSON.parse(body));
        }
      );
      //API call to Yelp
      request(
        {
          headers: {
            Authorization: `Bearer ${process.env.YELP_API}`
          },
          uri: yelpURL
        },
        (error, response, body) => {
          yelpBODY = JSON.parse(body);
          console.log(yelpBODY);
          // return res.json(JSON.parse(body));
        }
      );
    }
  } else {
    console.log("Error passing the current location to API");
  }
});

module.exports = router;
