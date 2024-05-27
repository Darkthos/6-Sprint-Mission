import { css } from "@/styled-system/css";
import HeaderSign from "@components/HeaderSign";
import SocialLogin from "@components/SocialLogin";
import { buttonRecipe } from "@css/recipe/buttonRecipe.styled";
import { inputRecipe } from "@css/recipe/inputRecipe.styled";
import {
  labelInputContainer,
  labelBasicStyle,
  formBasicStyle,
} from "@css/sign.styled";
import { ROUTER_LINKS } from "@utils/constant";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className={css({ px: "16px" })}>
      <HeaderSign />
      <div className={formBasicStyle}>
        <div className={labelInputContainer}>
          <label className={labelBasicStyle}>이메일</label>
          <input
            placeholder="이메일을 입력해주세요"
            className={inputRecipe()}
          />
        </div>
        <div className={labelInputContainer}>
          <label className={labelBasicStyle}>비밀번호</label>
          <input
            placeholder="비밀번호를 입력해주세요"
            className={inputRecipe()}
          />
        </div>
        <Link
          to={ROUTER_LINKS.home}
          className={buttonRecipe({ visual: "sign" })}
        >
          로그인
        </Link>
        <SocialLogin />
        <p className={css({ fontWeight: "bold" })}>
          판다마켓이 처음이신가요?{" "}
          <Link
            to={ROUTER_LINKS.signup}
            className={css({ color: "blueBasic", textDecoration: "underline" })}
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
