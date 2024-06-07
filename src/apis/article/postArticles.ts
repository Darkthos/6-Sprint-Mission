import axiosInstance from "../axiosInstance";

export interface PostArticlesParams {
  image?: any;
  content: string;
  title: string;
}

const postArticles = async (
  option: PostArticlesParams = {
    image: "",
    content: "",
    title: "",
  },
  headers: any
) => {
  console.log(headers);
  try {
    const { data } = await axiosInstance.post<any>("/articles", option, {
      headers,
    });

    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default postArticles;
