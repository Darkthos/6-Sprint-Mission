import axiosInstance from "../axiosInstance";
import { ArticleId } from "@/types/articles";

/** 
 * @description 게시글 검색에 쓰는 쿼리 옵션
 * @params option {  
    page: 1,
    pageSize: "",
    orderBy: "like" | "recent",
    keyword: "",  }
 * @ref https://panda-market-api.vercel.app/#/articles
 */

///https://panda-market-api.vercel.app/articles/2

const getArticlesId = async (id: any): Promise<ArticleId> => {
  try {
    const { data } = await axiosInstance.get<ArticleId>(`/articles/${id}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default getArticlesId;
