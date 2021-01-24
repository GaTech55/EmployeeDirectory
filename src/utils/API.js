import axios from "axios";
//exporting api
export default {
  getRandomEmployee: function () {
    return axios.get("https://randomuser.me/api/?results=30");
  },
};
