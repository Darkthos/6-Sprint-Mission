import React from "react";
import { styled } from "styled-components";
import FormLabelText from "~/components/Text/FormLabelText";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function AddTextForm(props) {
  return (
    <AddTextFormTag>
      <FormLabelText text="상품명" />
      <AddTextFormInput placeholder="상품명을 입력해주세요" />
      <FormLabelText text="상품 소개" />
      <AddTextFormBigInput placeholder="상품 소개를 입력해주세요" />
      <FormLabelText text="판매 가격" />
      <AddTextFormInput placeholder="판매 가격을 입력해주세요" />
      <FormLabelText text="태그" />
      <AddTextFormInput placeholder="태그를 입력해주세요" />
    </AddTextFormTag>
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
  color: #9ca3af;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 0 16px 24px;
  width: 100%;
  border: none;
`;
export const AddTextFormBigInput = styled.input`
  height: 200px;
  border-radius: 12px;
  background-color: #f3f4f6;
  color: #9ca3af;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 0 16px 24px;
  width: 100%;
  border: none;
`;
