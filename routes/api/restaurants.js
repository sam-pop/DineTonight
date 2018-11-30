const router = require("express").Router();
const resturantsController = require("../../controllers/resturantsController");
const request = require("request-promise-native");

// Matches with "/api/restaurants"
router.post("/", (req, res) => {
  let zomatoBODY;
  let yelpBODY;
  // Current location is passed through the req
  if (req.body) {
    //Parsing coordinates
    let searchRadius = parseInt(req.body.radius);
    let lat = parseFloat(req.body.location.lat);
    let lon = parseFloat(req.body.location.lon);

    //Using async-await and promises to handle multi-data fetching from remote servers
    async function getRemoteData() {
      // Construct API uris
      const zomatoURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`;
      const yelpURL = ` https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${lon}&open_now=true&radius=${searchRadius}&sort_by=best_match&limit=50`;

      //API call to Zomato
      let zomato = await request({
        headers: {
          // Auth header
          "user-key": process.env.ZOMATO_API
        },
        uri: zomatoURL,
        json: true
      })
        .then(apiRes => {
          //Extracting relevant properties from the API response
          zomatoBODY = apiRes.nearby_restaurants
            .filter(Obj => Obj.restaurant.user_rating.aggregate_rating >= 4)
            .map(Obj => {
              return {
                name: Obj.restaurant.name,
                cuisines: Obj.restaurant.cuisines,
                address: Obj.restaurant.location.address,
                address_link: `https://maps.google.com/?q=${
                  Obj.restaurant.location.address
                }`,
                price_range: renderDollarSigns(Obj.restaurant.price_range),
                rating: Obj.restaurant.user_rating.aggregate_rating,
                votes: Obj.restaurant.user_rating.votes,
                menu: Obj.restaurant.menu_url,
                image: Obj.restaurant.featured_image,
                phone: Obj.restaurant.phone_numbers
              };
            });
          return true;
        })
        .catch(err => console.log("Zomato API: ", err.message));

      //API call to Yelp
      let yelp = await request({
        headers: {
          // Auth header
          Authorization: `Bearer ${process.env.YELP_API}`
        },
        uri: yelpURL,
        json: true
      })
        .then(yelpRes => {
          //Extracting relevant properties from the API response
          yelpBODY = yelpRes.businesses
            .filter(Obj => Obj.review_count >= 150 && Obj.rating >= 4)
            .map(Obj => {
              let thisCuisines = Obj.categories.map(Cat => {
                return Cat.title;
              });
              return {
                name: Obj.name,
                cuisines: thisCuisines.toString(),
                address: Obj.location.display_address[0],
                address_link: `https://maps.google.com/?q=${
                  Obj.location.display_address[0]
                }`,
                price_range: Obj.price,
                rating: Obj.rating,
                votes: Obj.review_count,
                link: Obj.url,
                image: Obj.image_url,
                phone: Obj.display_phone,
                phone_link: `tel:${Obj.phone}`,
                distance: Obj.distance
              };
            });
          return true;
        })
        .catch(err => console.log("Yelp API: ", err.message));
      //After both requests are done
      if (zomato && yelp) {
        console.log("Both API calls successfuly resolved!");
        res.json(shuffle([...zomatoBODY, ...yelpBODY]));
      } else {
        // API error handling
        if (zomato) {
          console.log("Only Zomato API call successfuly resolved!");
          res.json(shuffle([...zomatoBODY]));
        } else if (yelp) {
          console.log("Only Yelp API call successfuly resolved!");
          res.json(shuffle([...yelpBODY]));
        } else {
          console.log("API ERROR!");
          res.json({
            error: "API ERROR! Try again (or report the issue on GitHub)"
          });
        }
      }
    }
    // RUN!
    getRemoteData();
  } else {
    console.log("Error passing the current location to the API");
  }
});

// Helper method to convert price_range from a number to '$'
function renderDollarSigns(val) {
  if (typeof val === "number") {
    let res = "";
    for (let i = 0; i < val; i++) {
      res += "$";
    }
    return res;
  } else return val;
}

// Helper method to shuffle an array (in-place)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = router;
