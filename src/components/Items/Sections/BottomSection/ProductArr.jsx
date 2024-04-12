import { styled } from "styled-components";
import ProductContainer from "./ProductContainer";

function ProductArr() {
  return (
    <ProductArrTag>
      <ProductContainer />
      <ProductContainer />
    </ProductArrTag>
  );
}

export default ProductArr;
export const ProductArrTag = styled.div`
  display: flex;
  gap: 8px;
`;
