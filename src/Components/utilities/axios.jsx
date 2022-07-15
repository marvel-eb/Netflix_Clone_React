import axios from "axios";

// BASE OF THE MOVIE URL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
