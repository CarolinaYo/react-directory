import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=";
const limit = 100;

// Export an object with a "search" method that searches the API for the passed query
const API = {
  searchRandomUser: function () {
    return axios.get(BASEURL + limit);
  },
};

export default API;
