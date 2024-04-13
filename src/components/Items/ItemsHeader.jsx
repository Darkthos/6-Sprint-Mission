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
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 0 16px 0;
`;
export const HeadNavBox = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`;
