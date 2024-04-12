import Signlogo from "../SignLogo";
import invisibleImg from "~assets/icon/invisible.svg";
import googleImg from "~assets/icon/google.svg";
import kakaoImg from "~assets/icon/kakao.png";
import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";

function Signinform(props) {
  return (
    <div>
      <Signlogo />
      <main>
        <form className="sign-form">
          <div>
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" placeholder="이메일을 입력해주세요" type="email" />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <div className="password-box">
              <input id="password" name="password" placeholder="비밀번호를 입력해주세요" type="password" />
              <img id="toggle-password" src={invisibleImg} alt="비밀번호 표시" />
            </div>
          </div>
          <a className="sign-form__button">로그인</a>
          <div className="social-login">
            <p className="description">간편 로그인하기</p>
            <div className="button-box">
              <a href="https://www.google.com/">
                <img src={googleImg} alt="구글-로그인" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={kakaoImg} alt="카카오-로그인" />
              </a>
            </div>
          </div>
          <div className="sign-footer">
            <p>판다마켓이 처음이신가요?</p>
            <Link to={ROUTER_LINKS.signup} alt="회원가입-페이지">
              회원가입
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Signinform;
