import { styled } from "styled-components";
import Description from "../auth/Text/Description";
import Price from "../auth/Text/Price";
import Favorite from "../auth/Favorite";

function CommonProduct({ id, src, text, price, favorite }) {
  return (
    <ProductBox>
      <CommonProductImg id={id} src={src} />
      <ProductTextBox>
        <Description text={text + " 팝니다"} />
        <Price price={price} />
        <Favorite favorite={favorite} />
      </ProductTextBox>
    </ProductBox>
  );
}

export default CommonProduct;
export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CommonProductImg = styled.img`
  @media screen and (min-width: 1201px) {
    width: 221px;
  }
  @media screen and (min-width: 744px) {
    width: 221px;
  }
  aspect-ratio: 1 / 1;
  min-width: 168px;
  width: 100%;
  border-radius: 19.46px;
`;
export const ProductTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
