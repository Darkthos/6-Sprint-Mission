import axios from "axios";

const axiosConfig = {
  baseURL: "https://panda-market-api.vercel.app",
};

export const axiosInstance = axios.create(axiosConfig);
