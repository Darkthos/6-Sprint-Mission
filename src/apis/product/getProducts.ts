import createQueryParams from "@/utils/createQueryParams";
import axiosInstance from "../axiosInstance";
import { GetProductsResponse } from "@/types/products.type";

export interface GetProductsParams {
  page?: number;
  pageSize?: number | string;
  orderBy?: "recent" | "favorite";
}

const getProducts = async (
  option: GetProductsParams = {
    page: 1,
    pageSize: 10,
    orderBy: "favorite",
  }
) => {
  const ProductsParams = createQueryParams(option);
  try {
    const { data } = await axiosInstance.get<GetProductsResponse>(
      `/products?${ProductsParams}`
    );
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default getProducts;
