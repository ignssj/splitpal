import axios from "axios";
import useStorage from "../hooks/useStorage";

const { read } = useStorage();

const api = axios.create({
  baseURL: __DEV__ ? "http://54.146.180.62:8080/api/" : "http://localhost:8080/api/",
  timeout: 5000,
});

api.interceptors.request.use(async function (config) {
  const token = await read("token");
  config.headers.Authorization = "Bearer " + token;
  return config;
});

export default api;
