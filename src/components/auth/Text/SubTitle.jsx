import { styled } from "styled-components";

function SubTitle({ text }) {
  return <SubTitleText>{text}</SubTitleText>;
}

export default SubTitle;
export const SubTitleText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #111827;
`;
