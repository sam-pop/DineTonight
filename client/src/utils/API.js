import axios from "axios";

const BASEURL = "";
const APIKEY = "";

// Export an object with a "search" method
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
