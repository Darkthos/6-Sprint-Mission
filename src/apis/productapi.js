// export async function getReviews() {
//   const response = await fetch("https://panda-market-api.vercel.app/products");
//   const body = await response.json();
//   return body;
// }
import { axiosInstance } from "./axiosInstance";

const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products?page=1&pageSize=18");
    const products = response.data;
    console.log(products);
    return products;
  } catch (error) {
    throw new Error(error.massage);
  } finally {
    console.log("complte"); // 이 부분은 요청이 완료되었을 때 항상 실행됩니다.
  }
};

export default getProducts;
