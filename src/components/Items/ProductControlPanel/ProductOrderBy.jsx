import { styled } from "styled-components";
import orderByIcon from "~assets/icon/sort.png";

function ProductOrderBy(props) {
  return (
    <ProductOrderByTag>
      <img src={orderByIcon} />
    </ProductOrderByTag>
  );
}

export default ProductOrderBy;
export const ProductOrderByTag = styled.div`
  @media screen and (min-width: 1201px) {
    position: relative;
  }
  @media screen and (min-width: 744px) {
    position: relative;
  }
  width: 42px;
  height: 42px;
  padding: 9px 9px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;
