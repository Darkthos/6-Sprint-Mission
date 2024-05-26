import { ROUTER_LINKS } from "@utils/constant";
import { Link } from "react-router-dom";
import topBannerImage from "@assets/images/top-banner.png";
import { buttonRecipe } from "@css/common/recipe.styled";
import { vstack } from "@css/styled-system/patterns";
import { css } from "@css/styled-system/css";
import { bannerTitle } from "@css/home.styled";

function TopBanner() {
  return (
    <div
      className={vstack({
        bg: "blueBanner",
        flexDirection: { base: "column", xl: "row" },
        justify: "center",
      })}
    >
      <div
        className={vstack({
          gap: 0,
        })}
      >
        <p className={bannerTitle}>
          일상의 모든 물건을
          <br
            className={css({
              display: { base: "block", md: "none", xl: "block" },
            })}
          />
          거래해보세요
        </p>
        <Link to={ROUTER_LINKS} className={buttonRecipe({ visual: "banner" })}>
          구경하러 가기
        </Link>
      </div>
      <img
        src={topBannerImage}
        alt="판다 상단배너"
        className={css({
          mt: { base: "55px", md: "94px" },
        })}
      />
    </div>
  );
}

export default TopBanner;
