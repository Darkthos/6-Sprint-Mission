import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://panda-market-api.vercel.app/",
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
