import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";
import pandaLogoImg from "~assets/panda-log.svg";

function HeadLogo({ size }) {
  const HeadLogoClass = `gnb__logo${size === "small" ? ` gnb__logo ${size}` : ""}`;
  return (
    <Link to={ROUTER_LINKS.home} className={HeadLogoClass} href="./index" alt="랜딩페이지">
      <img src={pandaLogoImg} alt="로고" />
      <span className="logo-title font-heading">판다마켓</span>
    </Link>
  );
}

export default HeadLogo;
