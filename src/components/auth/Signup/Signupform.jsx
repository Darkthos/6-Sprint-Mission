import Signlogo from "../SignLogo";
import invisibleImg from "~assets/icon/invisible.svg";
import googleImg from "~assets/icon/google.svg";
import kakaoImg from "~assets/icon/kakao.png";
import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";

function Signupform() {
  return (
    <div className="signup-container">
      <Signlogo />
      <main>
        <form className="sign-form">
          <div>
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" placeholder="이메일을 입력해주세요" type="email" />
          </div>
          <div>
            <label htmlFor="nick-name">닉네임</label>
            <input id="nick-name" name="nick-name" placeholder="닉네임을 입력해주세요" />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <div className="password-box">
              <input id="password" name="password" placeholder="비밀번호를 입력해주세요" type="password" />
              <img id="toggle-password" src={invisibleImg} alt="비밀번호 보이기" />
            </div>
          </div>
          <div>
            <label htmlFor="repassword">비밀번호 확인</label>
            <div className="password-box">
              <input
                id="repassword"
                name="repassword"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                type="password"
              />
              <img id="toggle-repassword" src={invisibleImg} alt="비밀번호 보이기" />
            </div>
          </div>
          <button className="sign-form__button">회원가입</button>
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
            <p>이미 회원이신가요?</p>
            <Link to={ROUTER_LINKS.signin} alt="로그인 페이지">
              로그인
            </Link>
          </div>
        </form>
      </main>
      <script src="./sign.js"></script>
      <script src="./password-eye.js"></script>
      <script src="./sign-button.js"></script>
    </div>
  );
}

export default Signupform;
