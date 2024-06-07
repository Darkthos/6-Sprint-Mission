import { subTitle } from "@/css/common/text.styled";
import { buttonRecipe } from "@/css/recipe/buttonRecipe.styled";
import { hstack } from "@/styled-system/patterns";

function FormTitle() {
  return (
    <div className={hstack({ justifyContent: "space-between" })}>
      <h2 className={subTitle}>게시글 쓰기</h2>
      <button className={buttonRecipe({ visual: "smallDisabled" })}>
        글쓰기
      </button>
    </div>
  );
}

export default FormTitle;
