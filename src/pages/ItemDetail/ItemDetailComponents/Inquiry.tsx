import { useState } from "react";
import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

const inquiryPlaceholder =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";
function Inquiry(props) {
  const [isActive, setIsActive] = useState();

  const handleIsActive = (e) => {
    setIsActive(e.target.value);
  };

  return (
    <InquiryTag>
      <InquiryTitleTag>문의하기</InquiryTitleTag>
      <InquiryTextareaTag placeholder={inquiryPlaceholder} onChange={handleIsActive}></InquiryTextareaTag>
      <InquiryButtonTag $isActive={isActive}>등록</InquiryButtonTag>
    </InquiryTag>
  );
}

export default Inquiry;
export const InquiryTag = styled.div`
  ${PC_SIZE} {
    margin-top: 24px;
  }
  ${TABLET_SIZE} {
    margin-top: 24px;
  }
  margin-top: 16px;
  position: relative;
  height: 197px;
  width: 100%;
`;
export const InquiryTitleTag = styled.h4`
  color: #111827;
  font-size: 16px;
  line-height: 19.09px;
  font-weight: 600;
`;
export const InquiryTextareaTag = styled.textarea`
  background-color: #f3f4f6;
  width: 100%;
  margin-top: 16px;
  height: 104px;
  border-radius: 12px;
  padding: 16px 24px 16px 24px;
  border: none;
  resize: none;
`;
export const InquiryButtonTag = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${(props) => (props.$isActive ? "#3692FF" : "#9ca3af")};
  border-radius: 8px;
  padding: 12px 23px 12px 23px;
  width: 71px;
  height: 42px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  color: #ffffff;
  cursor: pointer;
`;
