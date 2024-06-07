import { ParsedUrlQuery } from "querystring";
import axiosInstance from "../axiosInstance";

//'https://panda-market-api.vercel.app/articles/187/comments'
const postArticlesComment = async (
  content: string,
  id: string,
  headers: any
) => {
  try {
    await axiosInstance.post<any>(
      `/articles/${id}/comments`,
      { content },
      { headers }
    );
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default postArticlesComment;
