import { axiosInstance } from "./axiosInstance";

const getProductDetail = async (id = 1) => {
  const query = `/${id}`;
  try {
    const response = await axiosInstance.get(`/products${query}`);
    // const { responseURL } = response.request;
    // console.log(responseURL);
    const products = response.data;
    return products;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    console.log("ProductDetail complete");
  }
};

export default getProductDetail;
