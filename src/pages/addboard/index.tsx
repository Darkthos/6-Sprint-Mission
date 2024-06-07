import postArticles from "@/apis/article/postArticles";
import postImage from "@/apis/postImage";
import Form from "@/components/addBoardComponents/Form";
import FormTitle from "@/components/addBoardComponents/FormTitle";
import Header from "@/components/shared/Header/Header";
import { css } from "@/styled-system/css";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface PostData {
  content: string;
  title: string;
  image: string | null;
}

function AddBoard() {
  const [postData, setUserData] = useState<PostData>({
    content: "",
    title: "",
    image: null,
  });
  const router = useRouter();

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...postData,
      [name]: value,
    });
  };

  const onChangeImage = async (e: any) => {
    const file = e.target.files[0];
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await postImage(headers, file);
    setUserData({
      ...postData,
      image: response.url,
    });
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    await postArticles(postData, headers);
    router.push("/boards");
  };
  const isValid: boolean = !!(postData.content && postData.title);

  return (
    <div>
      <Header />
      <div
        className={css({
          m: "auto",
          maxW: "1200px",
          p: { base: "16px", md: "16px 24px", xl: "24px" },
        })}
      >
        <FormTitle isValid={isValid} handleSubmit={handleSubmit} />
        <Form
          postData={postData}
          onChangeInput={onChangeInput}
          onChangeImage={onChangeImage}
        />
      </div>
    </div>
  );
}

export default AddBoard;
