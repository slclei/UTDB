import axios from "axios";
export default axios.create({
  baseURL: "https://edx.netl.doe.gov",
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json",
    'Access-Control-Allow-Credentials':true
  },

});