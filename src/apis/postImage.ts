import axiosInstance from "@/apis/axiosInstance";

const postImage = async (headers: any, image?: any) => {
  console.log(image);
  console.log(headers);
  console.log("hihi");
  try {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    const { data } = await axiosInstance.post<any>("/images/upload", formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw error;
  }
};

export default postImage;
