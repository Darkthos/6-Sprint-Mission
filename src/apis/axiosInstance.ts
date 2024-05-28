import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://panda-market-api.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
