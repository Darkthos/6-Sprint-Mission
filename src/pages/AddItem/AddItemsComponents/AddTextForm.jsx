import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import FormLabelText from "~/components/Text/FormLabelText";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import AddTag from "./AddTag/AddTag";
import { FormContext } from "~/hook/Context/FormContext";

function AddTextForm() {
  const [tagText, setTagText] = useState();
  const [tags, setTags] = useState([]);
  const { setIsFormValid } = useContext(FormContext);
  const [inputText, setInputText] = useState({
    productName: "",
    productIntro: "",
    productPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(inputText).every((value) => value.trim() !== "");
    setIsFormValid(allFieldsFilled);
  }, [inputText, setIsFormValid]);

  const handleCreateTag = (e) => {
    setTagText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = tagText.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        setTagText("");
      }
    }
  };
  // const formattedPrice = new Intl.NumberFormat().format(inputText);
  return (
    <>
      <AddTextFormTag>
        <FormLabelText text="상품명" />
        <AddTextFormInput
          name="productName"
          value={inputText.productName}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
        <FormLabelText text="상품 소개" />
        <AddTextFormBigInput
          name="productIntro"
          value={inputText.productIntro}
          onChange={handleInputChange}
          size="big"
          placeholder="상품 소개를 입력해주세요"
        />
        <FormLabelText text="판매 가격" />
        <AddTextFormInput
          name="productPrice"
          value={inputText.productPrice}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
        <AddTextFormInput
          value={tagText}
          onChange={handleCreateTag}
          onKeyDown={handleKeyDown}
          placeholder="태그를 입력해주세요"
        />
      </AddTextFormTag>
      <AddTextFormTagContainer>
        {tags.map((tag, index) => (
          <AddTag text={tag} key={index} />
        ))}
      </AddTextFormTagContainer>
    </>
  );
}

export default AddTextForm;
export const AddTextFormTag = styled.form`
  ${PC_SIZE} {
    gap: 24px;
  }
  ${TABLET_SIZE} {
    gap: 24px;
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const AddTextFormInput = styled.input`
  height: 56px;
  border-radius: 12px;
  background-color: #f3f4f6;
  color: var(--sign-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-left: 16px;
  width: 100%;
  border: none;
`;
export const AddTextFormBigInput = styled.textarea`
  height: 200px;
  border-radius: 12px;
  background-color: #f3f4f6;
  color: var(--sign-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px;
  width: 100%;
  border: none;
  font-family: "Pretendard-Regular";
`;

export const AddTextFormTagContainer = styled.span`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;
