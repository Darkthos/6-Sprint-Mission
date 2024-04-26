import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ROUTER_LINKS } from "~/utils/constant";

import backIcon from "~assets/icon/back.svg";

function BackItemsButton(props) {
  return (
    <BackItemsButtonTag to={ROUTER_LINKS.items}>
      <BackItemsButtonTextTag>목록으로 돌아가기</BackItemsButtonTextTag>
      <img src={backIcon} />
    </BackItemsButtonTag>
  );
}

export default BackItemsButton;
export const BackItemsButtonTag = styled(Link)`
  background-color: #3692ff;
  width: 240px;
  height: 48px;
  border-radius: 40px;
  font-size: 16px;
  line-height: 19.09px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`;
export const BackItemsButtonTextTag = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;
