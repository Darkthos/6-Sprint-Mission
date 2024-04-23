import { styled } from "styled-components";
import Description from "../../components/Text/Description";
import Price from "../../components/Text/Price";
import Favorite from "../../components/Favorite";

function BestProduct({ id, src, text, price, favorite }) {
  return (
    <ProductBox>
      <BestProductImg id={id} src={src} />
      <ProductTextBox>
        <Description text={text + " 팝니다"} />
        <Price price={price} />
        <Favorite favorite={favorite} />
      </ProductTextBox>
    </ProductBox>
  );
}

export default BestProduct;
export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const BestProductImg = styled.img`
  @media screen and (min-width: 1201px) {
    width: 282px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    width: 336px;
  }
  width: 336px;

  border-radius: 19.46px;
`;
export const ProductTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
`;
