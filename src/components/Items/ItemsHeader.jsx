import { styled } from "styled-components";
import HeadLogo from "../auth/HeadLogo";
import HeadNav from "../auth/HeadNav";
import Button from "../auth/Button";

function ItemsHeader() {
  return (
    <ItemsHeaderTag>
      <HeadLogo />
      <HeadNavBox>
        <HeadNav text="자유게시판" />
        <HeadNav text="중고마켓" />
      </HeadNavBox>
      <Button text="로그인" size="small" />
    </ItemsHeaderTag>
  );
}

export default ItemsHeader;
export const ItemsHeaderTag = styled.div`
  @media screen and (min-width: 1201px) {
    gap: 32px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    gap: 20px;
  }
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 0 16px 0;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: white;
  border-bottom: 1px solid #dfdfdf;
`;
export const HeadNavBox = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`;
