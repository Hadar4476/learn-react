import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: headers,
});

export default instance;
