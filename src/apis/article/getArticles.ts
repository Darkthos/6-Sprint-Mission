import createQueryParams from "@/utils/createQueryParams";
import axiosInstance from "../axiosInstance";
// https://panda-market-api.vercel.app/docs/#/
//page=1&pageSize=30&orderBy=recent&keyword=%EC%8B%A0%EC%8A%B9%ED%99%94
const getArticles = async (option = {}) => {
  const defaultOption: Record<string, string | number> = {
    page: 1,
    pageSize: 10,
    orderBy: "like",
    keyword: "",
  };
  const articlesOption = { ...defaultOption, ...option };
  const articlesParams = createQueryParams(articlesOption);

  try {
    const response = await axiosInstance.get(`/articles?${articlesParams}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error("response failed");
  }
};

export default getArticles;
