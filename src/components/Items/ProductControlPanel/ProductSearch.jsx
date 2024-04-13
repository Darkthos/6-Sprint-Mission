import { styled } from "styled-components";

function ProductSearch({ text }) {
  return <ProductSearchTag></ProductSearchTag>;
}

export default ProductSearch;
export const ProductSearchTag = styled.input`
  @media screen and (min-width: 1201px) {
    position: relative;
  }
  @media screen and (min-width: 744px) {
    position: relative;
  }
  width: 294px;
  height: 42px;
  border-radius: 12px;
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
