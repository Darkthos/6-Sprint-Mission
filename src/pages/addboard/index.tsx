import postArticles from "@/apis/article/postArticles";
import postImage from "@/apis/postImage";
import Form from "@/components/addBoardComponents/Form";
import FormTitle from "@/components/addBoardComponents/FormTitle";
import Header from "@/components/shared/Header/Header";
import { css } from "@/styled-system/css";
import { useRouter } from "next/router";
import React, { useState } from "react";

function AddBoard() {
  const [postData, setUserData] = useState({
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(postData);
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await postArticles(postData, headers);
      console.log("Post successful:", response);
      router.push("/boards");
    } catch (error) {
      console.error("Post failed:", error);
    }
  };

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
        <FormTitle handleSubmit={handleSubmit} />
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
