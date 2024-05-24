import React from "react";
import { styled } from "styled-components";
import PassiveXbox from "~assets/passivexbox.svg";

const handleDeleteTag = (e) => {
  console.log(e.target.outerHTML);
  e.target.parentElement.remove();
};

function AddTag({ text }) {
  return (
    <AddTextFormTagFlex>
      <AddTextFormTagText>{text}</AddTextFormTagText>
      <img style={{ cursor: "pointer" }} src={PassiveXbox} onClick={handleDeleteTag} />
    </AddTextFormTagFlex>
  );
}

export default AddTag;
export const AddTextFormTagText = styled.p`
  color: var(--sign-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const AddTextFormTagFlex = styled.div`
  display: flex;
  gap: 8px;
  background-color: #f3f4f6;
  padding: 12px 12px 12px 16px;
  border-radius: 26px;
`;
