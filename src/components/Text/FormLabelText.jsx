import { styled } from "styled-components";

function FormLabelText({ text }) {
  return <FormLabelTextTag>{text}</FormLabelTextTag>;
}

export default FormLabelText;
export const FormLabelTextTag = styled.label`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.71px;
  color: #1f2937;
`;
