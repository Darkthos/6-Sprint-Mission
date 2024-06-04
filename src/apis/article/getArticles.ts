import createQueryParams from "@/utils/createQueryParams";
import axiosInstance from "../axiosInstance";

// https://panda-market-api.vercel.app/docs/#/
//page=1&pageSize=30&orderBy=recent&keyword=%EC%8B%A0%EC%8A%B9%ED%99%94

interface GetArticlesParams {
  page?: number;
  pageSize?: number;
  orderBy?: "like" | "recent";
  keyword?: string;
}

const getArticles = async (
  option: GetArticlesParams = {
    page: 1,
    pageSize: 10,
    orderBy: "like",
    keyword: "",
  }
): Promise<any> => {
  const articlesParams = createQueryParams(option);
  try {
    const { data } = await axiosInstance.get<any>(
      `/articles?${articlesParams}`
    );
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default getArticles;
