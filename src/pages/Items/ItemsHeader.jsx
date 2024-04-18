import { styled } from "styled-components";
import HeadLogo from "../../components/HeadLogo";
import HeadNav from "../../components/HeadNav";
import Button from "../../components/Button";
import { ROUTER_LINKS } from "~/utils/constant";
import { useLocation } from "react-router-dom";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function ItemsHeader() {
  const location = useLocation();

  return (
    <HeaderTag>
      <HeadLogo />
      <HeadNavBox>
        <HeadNav text="자유게시판" />
      </HeadNavBox>
      <HeadNav text="중고마켓" isActive={location.pathname === "/items"} />
      <Button text="로그인" size="small" link={ROUTER_LINKS.signin} />
    </HeaderTag>
  );
}

export default ItemsHeader;
export const HeaderTag = styled.div`
  @media screen and (min-width: 1600px) {
    gap: 32px;
    margin: 0 200px 0 200px;
  }
  ${PC_SIZE} {
    gap: 32px;
  }
  ${TABLET_SIZE} {
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
