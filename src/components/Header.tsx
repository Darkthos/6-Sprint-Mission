import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "../utils/constant";
import { buttonRecipe } from "@css/common/recipe.styled";
import { headerContainer, headerTitle } from "@css/home.styled";
import pandaLogoIcon from "@assets/icons/panda-logo.svg";
import { hstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";

function Header() {
  return (
    <div className={headerContainer}>
      <Link
        to={ROUTER_LINKS}
        className={hstack({
          flexGrow: "1",
        })}
      >
        <img
          src={pandaLogoIcon}
          alt="판다얼굴 로고"
          className={css({ display: { base: "none", md: "block" } })}
        />
        <p className={headerTitle}>판다마켓</p>
      </Link>
      <Link to={ROUTER_LINKS} className={buttonRecipe()}>
        로그인
      </Link>
    </div>
  );
}

export default Header;
