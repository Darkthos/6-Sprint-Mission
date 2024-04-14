import { styled } from "styled-components";
import orderByIcon from "~assets/icon/sort.png";

function ProductOrderBy({ text }) {
  return (
    <ProductOrderByTag>
      <ProductOrderBySelect>{text}</ProductOrderBySelect>
      <img src={orderByIcon} />
    </ProductOrderByTag>
  );
}

export default ProductOrderBy;
export const ProductOrderByTag = styled.div`
  @media screen and (min-width: 1201px) {
    position: relative;
    width: 130px;
    height: 42px;
    gap: 24px;
    padding-left: 20px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    position: relative;
    width: 120px;
    height: 42px;
    gap: 14px;
    padding-left: 20px;
  }
  width: 42px;
  height: 42px;
  padding-left: 9px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: 1px solid #e5e7eb;
`;
export const ProductOrderBySelect = styled.p`
  @media screen and (min-width: 1201px) {
  }
  @media screen and (min-width: 744px) {
    display: inline-block;
  }
  display: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #1f2937;
`;
