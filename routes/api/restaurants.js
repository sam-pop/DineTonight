const router = require("express").Router();
const resturantsController = require("../../controllers/resturantsController");
const request = require("request-promise-native");

// Matches with "/api/restaurants"
router.route("/").post((req, res) => {
  let zomatoBODY;
  let yelpBODY;

  // Current location is passed through the req
  if (req.body) {
    if (req.body.lat && req.body.lon) {
      //Parsing coordinates
      let lat = parseFloat(req.body.lat);
      let lon = parseFloat(req.body.lon);

      //Using async-await and promises to handle multi-data fetching from remote servers
      async function getRemoteData() {
        // Construct API urls
        const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
        const yelpURL = ` https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${lon}&open_now=true&radius=1000`;

        //API call to Zomato
        let zomato = await request({
          headers: {
            "user-key": process.env.ZOMATO_API
          },
          uri: zomatoURL,
          json: true
        })
          .then(apiRes => {
            zomatoBODY = apiRes;
            return true;
          })
          .catch(err => console.log(err));

        //API call to Yelp
        let yelp = await request({
          headers: {
            Authorization: `Bearer ${process.env.YELP_API}`
          },
          uri: yelpURL,
          json: true
        })
          .then(yelpRes => {
            yelpBODY = yelpRes;
            return true;
          })
          .catch(err => console.log(err));
        //After both requests are done
        if (zomato && yelp) {
          console.log("we got both working!");
          res.json(zomatoBODY);
        }
      }
      getRemoteData();
    }
  } else {
    console.log("Error passing the current location to API");
  }
});

module.exports = router;
