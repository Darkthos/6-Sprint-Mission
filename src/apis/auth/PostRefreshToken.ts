import { Token } from "@/types/api";
import axiosInstance from "../axiosInstance";

const PostRefreshToken = async (refreshToken?: string): Promise<Token> => {
  try {
    const { data } = await axiosInstance.post<Token>("/auth/refresh-token", {
      refreshToken: refreshToken,
    });
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default PostRefreshToken;
