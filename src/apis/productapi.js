// export async function getReviews() {
//   const response = await fetch("https://panda-market-api.vercel.app/products");
//   const body = await response.json();
//   return body;
// }
// https://panda-market-api.vercel.app/docs/#/
import { axiosInstance } from "./axiosInstance";
// 인자 세개이상이면 객체 만들어서 전달
// 쿼리 유틸함수 만들어서 키밸류 자동화시킴
const createQueryParams = (params) => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value);
    }
  }
  return searchParams.toString();
};

const getProducts = async () => {
  const options = { page: 1, pageSize: 18, orderBy: "recent" };

  const searchParams = createQueryParams(options);

  try {
    const response = await axiosInstance.get(`/products?${searchParams}`);
    const products = response.data;
    return products;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    console.log("Products complete");
  }
};

export default getProducts;
