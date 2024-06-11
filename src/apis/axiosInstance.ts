import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "@/utils/localStorageToken";

const axiosConfig: AxiosRequestConfig = {
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(`ERROR: ${error.response.data.message}`);
    return Promise.reject(error);
  }
);

export default axiosInstance;
