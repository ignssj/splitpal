import axios from "axios";

const api = axios.create({
  baseURL: __DEV__ ? "http://54.146.180.62:8080/api/" :  "http://localhost:8080/api/",
  timeout: 5000,
});

export default api;
