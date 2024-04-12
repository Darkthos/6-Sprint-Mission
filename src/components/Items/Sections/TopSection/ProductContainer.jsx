import { styled } from "styled-components";
import Description from "~/components/auth/Text/Description";
import Price from "~/components/auth/Text/Price";
import Heart from "../Heart";
import Product from "./Product";
import productImg from "~assets/items/ipad.png";
const ProductContainer = ({ text, img }) => {
  return (
    <ProductBox>
      <Product img={productImg} />
      <TopSectionTextBox>
        <Description text="아이패드 미니 팝니다" />
        <Price text="500,000원" />
        <Heart text="240" />
      </TopSectionTextBox>
    </ProductBox>
  );
};
export default ProductContainer;
export const ProductBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const TopSectionTextBox = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;
