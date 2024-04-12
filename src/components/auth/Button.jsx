import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";

function Button({ text, size }) {
  const loginButtonClass = `gnb__login-button${size === "small" ? ` gnb__login-button ${size}` : ""}`;
  return (
    <Link to={ROUTER_LINKS.signin} className={loginButtonClass}>
      {text}
    </Link>
  );
}

export default Button;
