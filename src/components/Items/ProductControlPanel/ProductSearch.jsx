import { styled } from "styled-components";
import searchIcon from "~assets/icon/search.svg";

function ProductSearch({ text }) {
  return (
    <ProductSearchbox>
      <img src={searchIcon} className="search-img" />
      <ProductSearchTag placeholder={text}></ProductSearchTag>
    </ProductSearchbox>
  );
}

export default ProductSearch;
export const ProductSearchbox = styled.div`
  @media screen and (min-width: 1201px) {
    position: relative;
  }
  @media screen and (min-width: 744px) {
    position: relative;
  }
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
export const ProductSearchTag = styled.input`
  width: 294px;
  height: 42px;
  border-radius: 12px;
  border: none;
  background-color: #f3f4f6;
  padding-left: 44px;
  padding-top: 2px;
`;
