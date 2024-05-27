import { Link, useLocation } from "react-router-dom";
import { ROUTER_LINKS } from "../utils/constant";
import pandaLogoIcon from "@assets/icons/panda-logo.svg";
import { hstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { buttonRecipe } from "@css/recipe/buttonRecipe.styled";
import {
  headerContainer,
  headerTitle,
  navContainer,
  navTextIsActive,
} from "@css/common/header.styled";

function Header() {
  const location = useLocation();

  return (
    <div className={headerContainer}>
      <Link to={ROUTER_LINKS.home} className={hstack()}>
        <img
          src={pandaLogoIcon}
          alt="판다얼굴 로고"
          className={css({ display: { base: "none", md: "block" } })}
        />
        <p className={headerTitle}>판다마켓</p>
      </Link>
      <div className={navContainer}>
        <Link
          to={ROUTER_LINKS.home}
          className={navTextIsActive(location.pathname === ROUTER_LINKS.home)}
        >
          자유게시판
        </Link>
        <Link
          to={ROUTER_LINKS.items}
          className={navTextIsActive(location.pathname === ROUTER_LINKS.items)}
        >
          중고마켓
        </Link>
      </div>
      <Link to={ROUTER_LINKS.signin} className={buttonRecipe()}>
        로그인
      </Link>
    </div>
  );
}

export default Header;
