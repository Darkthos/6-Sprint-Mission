import { styled } from "styled-components";
import heartIcon from "~assets/icon/heart.svg";

function Heart({ text }) {
  return (
    <HeartBox>
      <img src={heartIcon} />
      <HeartText>{text}</HeartText>
    </HeartBox>
  );
}

export default Heart;
export const HeartBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const HeartText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  color: 14.32px;
`;
