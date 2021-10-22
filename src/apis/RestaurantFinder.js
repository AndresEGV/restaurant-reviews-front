import axios from "axios";
//const baseURL = "http://localhost:3001/api/v1/restaurants";
const baseURL = "https://restaurant-pern.herokuapp.com/";
export default axios.create({
  baseURL,
});
