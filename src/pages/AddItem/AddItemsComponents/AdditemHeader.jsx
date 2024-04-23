import { styled } from "styled-components";
import { HeadLogo, HeadNav } from "~/components";
import { ROUTER_LINKS } from "~/utils/constant";
import { useLocation } from "react-router-dom";
import UserIcon from "~/assets/icon/user.png";
import { NavBorderLine, NavStickTag } from "~pages/Items/ItemsHeader";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function AdditemHeader() {
  const location = useLocation();

  return (
    <NavStickTag>
      <HeaderTag>
        <HeadLogo />
        <HeadNavBox>
          <HeadNav text="자유게시판" />
          <HeadNav
            text="중고마켓"
            isActive={location.pathname === "/items" || location.pathname === "/additem"}
            link={ROUTER_LINKS.items}
          />
        </HeadNavBox>
        <NavUserImg src={UserIcon} />
      </HeaderTag>
      <NavBorderLine></NavBorderLine>
    </NavStickTag>
  );
}

export default AdditemHeader;
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
  margin: 0 16px 0;
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
export const NavUserImg = styled.img`
  @media screen and (min-width: 1201px) {
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
  }
`;
