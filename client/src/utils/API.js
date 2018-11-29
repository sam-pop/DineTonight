import axios from "axios";

// Export an object with a "search" method
export default {
  getResults: function(params) {
    return axios.post("/api/restaurants", params);
  }
};
