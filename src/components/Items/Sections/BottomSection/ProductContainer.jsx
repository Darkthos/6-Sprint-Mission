import { styled } from "styled-components";
import Product from "./Product";
import { TopSectionTextBox } from "../TopSection/ProductContainer";
import Description from "~/components/auth/Text/Description";
import Price from "~/components/auth/Text/Price";
import Heart from "../Heart";

function ProductContainer() {
  return (
    <ProductBox>
      <Product />
      <TopSectionTextBox>
        <Description text="로봇 청소기" />
        <Price text="1,500,000원" />
        <Heart text="240" />
      </TopSectionTextBox>
    </ProductBox>
  );
}

export default ProductContainer;
export const ProductBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
