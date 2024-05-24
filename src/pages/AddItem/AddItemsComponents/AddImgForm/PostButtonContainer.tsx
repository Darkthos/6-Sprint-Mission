import React, { useContext } from "react";
import { styled } from "styled-components";
import { FormContext } from "~/hook/Context/FormContext";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function PostButtonContainer(props) {
  const { isFormValid } = useContext(FormContext);
  return (
    <PostButtonContainerTag>
      <PostTitleText>상품 등록하기</PostTitleText>
      <PostButton disabled={isFormValid}>등록</PostButton>
    </PostButtonContainerTag>
  );
}

export default PostButtonContainer;
export const PostButtonContainerTag = styled.div`
  ${PC_SIZE} {
    margin: 24px 0 16px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0 16px;
`;
export const PostTitleText = styled.h2`
  ${PC_SIZE} {
    font-size: 28px;
    line-height: 33.41px;
  }
  ${TABLET_SIZE} {
    font-size: 28px;
    line-height: 33.41px;
  }
  font-size: 20px;
  font-weight: 700;
  line-height: 23.87px;
  color: #1f2937;
`;
export const PostButton = styled.div`
  width: 88px;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? "#3692FF" : "#9ca3af;")};
  font-weight: 600;
  font-size: 16px;
  line-height: 19.09px;
  color: #ffffff;
  cursor: pointer;
`;
