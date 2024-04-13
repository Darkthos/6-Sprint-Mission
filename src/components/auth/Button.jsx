import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";

function Button({ text, size, link }) {
  const loginButtonClass = `gnb__login-button${size === "small" ? ` gnb__login-button ${size}` : ""}`;
  return (
    <Link to={ROUTER_LINKS.signin} className={loginButtonClass}>
      {text}
    </Link>
  );
}
// 링크 프롬받게 수정하기
export default Button;
