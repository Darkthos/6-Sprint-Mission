import { ROUTER_LINKS } from "@utils/constant";
import { Link } from "react-router-dom";
import topBanner from "@assets/images/top-banner.png";
import { buttonRecipe } from "@css/common/recipe.styled";
import { vstack } from "@css/styled-system/patterns";
import { css } from "@css/styled-system/css";
import COLORS from "@css/common/palette.styled";

function TopBanner() {
  return (
    <div className={css({ bg: COLORS.blueBasic })}>
      <div className={vstack()}>
        <p>일상의 모든 물건을 거래해보세요</p>
        <Link to={ROUTER_LINKS} className={buttonRecipe({ visual: "banner" })}>
          구경하러 가기
        </Link>
      </div>
      <img src={topBanner} />
    </div>
  );
}

export default TopBanner;
