import { styled } from "styled-components";

function SmallText({ favorite = "240" }) {
  return <SmallTextTag>{favorite}</SmallTextTag>;
}

export default SmallText;
export const SmallTextTag = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  color: #4b5563;
`;
