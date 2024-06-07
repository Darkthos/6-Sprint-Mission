import { labelBasicStyle, labelInputContainer } from "@/css/common/sign.styled";
import { inputRecipe } from "@/css/recipe/inputRecipe.styled";
import { css } from "@/styled-system/css";
import React from "react";
import { formStyle, labelInput } from "./form.styled";
import { vstack } from "@/styled-system/patterns";

function Form() {
  return (
    <div className={formStyle}>
      <div className={labelInput}>
        <label className={labelBasicStyle}>*제목</label>
        <input className={inputRecipe()} />
      </div>
      <div className={labelInput}>
        <label className={labelBasicStyle}>*내용</label>
        <textarea className={inputRecipe()} />
      </div>
      <div className={labelInput}>
        <label className={labelBasicStyle}>이미지</label>
        <div>fdsa</div>
      </div>
    </div>
  );
}

export default Form;
