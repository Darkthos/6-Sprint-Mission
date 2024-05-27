import { bannerTitle } from "@css/home.styled";
import { vstack } from "@css/styled-system/patterns";
import bottomBannerImage from "@assets/images/bottom-banner.png";

function BottomBanner() {
  return (
    <div
      className={vstack({
        bg: "blueBanner",
        flexDirection: { base: "column", xl: "row" },
        gap: { base: "54px", md: "74px", xl: "69px" },
        justifyContent: "center",
      })}
    >
      <div
        className={vstack({
          gap: 0,
          mt: { base: "121px", md: "201px", xl: "0px" },
        })}
      >
        <p className={bannerTitle}>
          믿을 수 있는
          <br />
          판다마켓 중고 거래
        </p>
      </div>
      <img src={bottomBannerImage} alt="판다 하단배너" />
    </div>
  );
}

export default BottomBanner;
