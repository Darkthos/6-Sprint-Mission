import { labelBasicStyle } from "@/css/common/sign.styled";
import { inputRecipe } from "@/css/recipe/inputRecipe.styled";
import { css, cx } from "@/styled-system/css";
import React from "react";
import { formStyle, labelInput } from "./form.styled";
import imageAdd from "@/assets/images/image-add.png";
import Image from "next/image";

function Form() {
  return (
    <div className={cx(formStyle, css({ marginTop: "24px" }))}>
      <div className={labelInput}>
        <label className={labelBasicStyle}>*제목</label>
        <input className={inputRecipe()} />
      </div>
      <div className={labelInput}>
        <label className={labelBasicStyle}>*내용</label>
        <textarea
          className={inputRecipe({ visual: "xLarge" })}
          placeholder="내용을 입력해주세요."
        />
      </div>
      <div className={labelInput}>
        <label className={labelBasicStyle}>이미지</label>
        <Image
          src={imageAdd}
          alt="이미지 등록하기"
          className={css({ w: { xl: "282px" } })}
        />
      </div>
    </div>
  );
}

export default Form;
