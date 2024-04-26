import { axiosInstance } from "./axiosInstance";

const getProductComments = async (id = 1) => {
  const query = `/${id}/comments?limit=2`;
  try {
    const response = await axiosInstance.get(`/products${query}`);
    // const { responseURL } = response.request;
    // console.log(responseURL);
    const products = response.data;
    return products;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    console.log("ProductComments complete");
  }
};

export default getProductComments;
