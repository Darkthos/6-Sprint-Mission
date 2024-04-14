import { styled } from "styled-components";

function Description({ text }) {
  return <DescriptionText>{text}</DescriptionText>;
}

export default Description;
export const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  color: #1f2937;
`;
