// export async function getReviews() {
//   const response = await fetch("https://panda-market-api.vercel.app/products");
//   const body = await response.json();
//   return body;
// }
import { axiosInstance } from "./axiosInstance";

const getProducts = async (page = 1, pageSize = 18, orderBy = "recent") => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await axiosInstance.get(`/products?${query}`);
    const { responseURL } = response.request;
    console.log(responseURL);
    const products = response.data;
    return products;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    console.log("complete");
  }
};

export default getProducts;
