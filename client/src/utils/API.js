import axios from "axios";

// Export an object with a "getResults" method
export default {
  getResults: function(params) {
    return axios.post("/api/restaurants", params);
  }
};
