import createQueryParams from "@/utils/createQueryParams";
import axiosInstance from "../axiosInstance";
import { GetArticlesResponse } from "@/types/articles";

interface GetArticlesIdCommentParams {
  limit: string;
}

/** 
 * @description 게시글 검색에 쓰는 쿼리 옵션
 * @params option {  
    page: 1,
    pageSize: "",
    orderBy: "like" | "recent",
    keyword: "",  }
 * @ref https://panda-market-api.vercel.app/#/articles
 */
// https://panda-market-api.vercel.app/articles/28/comments?limit=100
const getArticlesIdComment = async (articleId: any): Promise<any> => {
  try {
    const { data } = await axiosInstance.get<any>(
      `/articles/${articleId}/comments?limit=100`
    );
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default getArticlesIdComment;
