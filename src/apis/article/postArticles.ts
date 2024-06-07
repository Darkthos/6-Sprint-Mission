import axiosInstance from "../axiosInstance";

export interface PostArticlesParams {
  image?: any;
  content: string;
  title: string;
}

const postArticles = async (
  option: PostArticlesParams = {
    image: null,
    content: "",
    title: "",
  },
  headers: any
) => {
  const { image, ...restOption } = option;
  const payload = image ? option : restOption;

  try {
    const { data } = await axiosInstance.post<any>("/articles", payload, {
      headers,
    });

    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default postArticles;
