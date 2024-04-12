import pandaLogoImg from "~assets/panda-log.svg";

function HeadLogo({ size }) {
  const HeadLogoClass = `gnb__logo${size === "small" ? ` gnb__logo ${size}` : ""}`;
  return (
    <a className={HeadLogoClass} href="/" alt="랜딩페이지">
      <img src={pandaLogoImg} alt="로고" />
      <span className="logo-title font-heading">판다마켓</span>
    </a>
  );
}

export default HeadLogo;
