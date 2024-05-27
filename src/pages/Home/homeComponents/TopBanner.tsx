import { ROUTER_LINKS } from "@utils/constant";
import { Link } from "react-router-dom";
import topBannerImage from "@assets/images/top-banner.png";
import { buttonRecipe } from "@css/common/buttonRecipe.styled";
import { bannerTitle } from "@css/home.styled";
import { vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";

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
          gap: { base: "18px", md: "22px", xl: "32px" },
          mt: { base: "48px", md: "84px", xl: "0px" },
        })}
      >
        <p className={bannerTitle}>
          일상의 모든 물건을
          <br
            className={css({
              display: { base: "block", md: "none", xl: "block" },
            })}
          />
          거래해 보세요
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
