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
    <NavStickTag>
      <HeaderTag>
        <HeadLogo />
        <HeadNavBox>
          <HeadNav text="자유게시판" />
          <HeadNav text="중고마켓" isActive={location.pathname === "/items"} link={ROUTER_LINKS.items} />
        </HeadNavBox>
        <Button text="로그인" size="small" link={ROUTER_LINKS.signin} />
      </HeaderTag>
      <NavBorderLine />
    </NavStickTag>
  );
}

export default ItemsHeader;
export const HeaderTag = styled.div`
  ${PC_SIZE} {
    padding: 0 184px;
  }
  ${TABLET_SIZE} {
    padding: 0 8px;
  }
  padding: 0 0px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: white;
`;
export const HeadNavBox = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`;
export const NavBorderLine = styled.div`
  border-bottom: 1px solid #dfdfdf;
`;
export const NavStickTag = styled.div`
  position: sticky;
  top: 0px;
  z-index: 3;
`;
