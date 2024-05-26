import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "../utils/constant";
import { hstack } from "@css/styled-system/patterns";
import { buttonRecipe } from "@css/common/recipe.styled";
import { headerTitle } from "@css/home.styled";
import pandaLogo from "@assets/icons/panda-logo.svg";
import { css } from "@css/styled-system/css";

function Header() {
  return (
    <div
      className={hstack({ gap: "6", padding: "10px 16px", position: "sticky" })}
    >
      <Link
        to={ROUTER_LINKS}
        className={hstack({
          flexGrow: "1",
        })}
      >
        <img
          src={pandaLogo}
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
