import axios from "axios";

// Export an object with a "search" method
export default {
  getResults: function(location) {
    return axios.post("/api/restaurants", location);
  }
};
