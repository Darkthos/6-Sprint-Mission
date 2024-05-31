import HeaderSign from "@/components/shared/Header/HeaderSign";
import SocialLogin from "@/components/shared/SocialLogin";
import { buttonRecipe } from "@/css/recipe/buttonRecipe.styled";
import { inputRecipe } from "@/css/recipe/inputRecipe.styled";
import {
  formBasicStyle,
  labelBasicStyle,
  labelInputContainer,
} from "@/css/common/sign.styled";
import { css } from "@/styled-system/css";
import Link from "next/link";

function signin() {
  return (
    <div
      className={css({
        px: "16px",
        pt: { base: "24px", md: "48px", xl: "60px" },
      })}
    >
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
        <Link href="./index.tsx" className={buttonRecipe({ visual: "sign" })}>
          로그인
        </Link>
        <SocialLogin />
        <p className={css({ fontWeight: "bold" })}>
          판다마켓이 처음이신가요?{" "}
          <Link
            href="./signup"
            className={css({ color: "blueBasic", textDecoration: "underline" })}
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default signin;
