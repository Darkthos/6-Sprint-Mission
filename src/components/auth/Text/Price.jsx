import { styled } from "styled-components";

function Price({ text }) {
  return <PriceText>{text}</PriceText>;
}

export default Price;
export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  color: #1f2937;
`;
