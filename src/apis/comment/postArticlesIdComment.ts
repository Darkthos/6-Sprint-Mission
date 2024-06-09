import { Token } from "@/types/api";
import axiosInstance from "../axiosInstance";

const postArticlesComment = async (
  content: string,
  id: string,
  token: Token
) => {
  try {
    await axiosInstance.post<any>(
      `/articles/${id}/comments`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default postArticlesComment;
