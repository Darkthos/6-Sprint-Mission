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
import postSignin from "@/apis/auth/postSignin";
import { useState } from "react";
import { useRouter } from "next/router";

function Signin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    router.push("/boards");
    try {
      const response = await postSignin(userData);
      console.log("Signin successful:", response);
      localStorage.setItem("accessToken", response.accessToken);
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };
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
            name="email"
            type={userData.email}
            placeholder="이메일을 입력해주세요"
            className={inputRecipe()}
            onChange={onChangeInput}
          />
        </div>
        <div className={labelInputContainer}>
          <label className={labelBasicStyle}>비밀번호</label>
          <input
            name="password"
            type={userData.password}
            placeholder="비밀번호를 입력해주세요"
            className={inputRecipe()}
            onChange={onChangeInput}
          />
        </div>
        <button
          type="submit"
          className={buttonRecipe({ visual: "sign" })}
          onClick={handleSubmit}
        >
          로그인
        </button>
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

export default Signin;
