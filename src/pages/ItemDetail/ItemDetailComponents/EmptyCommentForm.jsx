import { styled } from "styled-components";
import inquiryEmpty from "~/assets/inquiry_empty.png";

function EmptyCommentForm() {
  return (
    <EmptyCommentFormTag>
      <EmptyCommentFormImg src={inquiryEmpty} />
      <EmptyCommentFormTextTag>아직 문의가 없습니다.</EmptyCommentFormTextTag>
    </EmptyCommentFormTag>
  );
}

export default EmptyCommentForm;
export const EmptyCommentFormTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
export const EmptyCommentFormImg = styled.img``;
export const EmptyCommentFormTextTag = styled.p`
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
