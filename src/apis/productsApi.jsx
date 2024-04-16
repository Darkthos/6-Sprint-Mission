import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

// const getProducts = async ({ page = "1", pageSize = "18", orderBy = "recent" }) => {
//   const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
//   try {
//     const response = await axiosInstance.get(`/products?${query}`);
//     const products = response.data;
//     return products;
//   } catch (error) {
//     throw new Error("안돼!");
//   } finally {
//     console.log("complete");
//   }
// };

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
