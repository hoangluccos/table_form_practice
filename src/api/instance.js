import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: "5000",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
