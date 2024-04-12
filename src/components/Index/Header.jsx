import pandaLogoImg from "~assets/icon/panda-log.svg";
import HeadLogo from "../auth/HeadLogo";
import Button from "../auth/Button";

function Header() {
  return (
    <header className="header">
      <div className="gnb">
        <HeadLogo />
        <Button text="로그인" />
      </div>
    </header>
  );
}

export default Header;
