import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

export async function GetProductLists({ orderBy = "", cursor = "", limit = 18 }) {
  const query = `orderBy=${orderBy}&cursor=${cursor}&limit=${limit}`;
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

// export function LoadProductLists() {
//   const [productList, setProductList] = useState([]);
//   const [count, setTotalCount] = useState(0);
//   useEffect(() => {
//     axiosInstance
//       .get("/products?pageSize=20")
//       .then((response) => response.data)
//       .then((data) => {
//         setProductList(data?.list ?? []);
//         setTotalCount(data?.totalCount);
//       });
//   }, []);
// }
