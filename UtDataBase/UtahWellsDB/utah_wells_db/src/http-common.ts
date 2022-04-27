import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json",
    'Access-Control-Allow-Credentials':true
  },

});