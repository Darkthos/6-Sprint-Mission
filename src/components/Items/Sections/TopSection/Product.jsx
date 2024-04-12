import { styled } from "styled-components";

function Product({ img }) {
  return <ProductImg src={img} />;
}

export default Product;
export const ProductImg = styled.img`
  max-width: 450px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  min-width: 282px;
  min-height: 282px;
  border-radius: 19.46px;
`;
