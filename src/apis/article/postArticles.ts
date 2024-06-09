import { Token } from "@/types/api";
import axiosInstance from "../axiosInstance";

export interface PostArticlesParams {
  image?: null | string;
  content: string;
  title: string;
}

const postArticles = async (
  option: PostArticlesParams = {
    image: null,
    content: "",
    title: "",
  },
  token: Token
) => {
  const { image, ...restOption } = option;
  const payload = image ? option : restOption;

  try {
    const { data } = await axiosInstance.post<any>("/articles", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default postArticles;
