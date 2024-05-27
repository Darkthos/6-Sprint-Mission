import { css } from "@/styled-system/css";
import HeaderSign from "@components/HeaderSign";
import { inputRecipe } from "@css/common/inputRecipe.styled";

function Signin() {
  return (
    <div>
      <HeaderSign />
      <div className={css({ display: "flex", flexDir: "column" })}>
        <label>이메일</label>
        <input placeholder="이메일" className={inputRecipe()} />
      </div>
    </div>
  );
}

export default Signin;
