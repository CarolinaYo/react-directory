import axios from "axios";

const API = {
  getRandomUser: function () {
    return axios.get("https://randomuser.me/api/?results=100");
  },
};

export default API;
