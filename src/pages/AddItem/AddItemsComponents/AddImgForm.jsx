import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import PostButtonContainer from "./AddImgForm/PostButtonContainer";
import FormLabelText from "~/components/Text/FormLabelText";
import ProductImgAdd from "./AddImgForm/ProductImgAdd";

function AddImgForm() {
  return (
    <div>
      <PostButtonContainer />
      <FormLabelText text="상품 이미지" />
      <ProductImgLayout>
        <ProductImgAdd />
      </ProductImgLayout>
    </div>
  );
}

export default AddImgForm;
export const ProductImgLayout = styled.h2`
  ${PC_SIZE} {
    gap: 24px;
    margin: 12px 0 24px 0;
  }
  ${TABLET_SIZE} {
    gap: 16px;
    margin: 12px 0 23px 0;
  }
  margin: 9px 0 9px 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
