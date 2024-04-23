import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
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
  ${PC_SIZE} {
    position: relative;
  }
  ${TABLET_SIZE} {
    position: relative;
  }
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
export const ProductSearchTag = styled.input`
  ${PC_SIZE} {
    width: 332px;
  }
  ${TABLET_SIZE} {
    width: 242px;
  }
  width: 254px;
  height: 42px;
  border-radius: 12px;
  border: none;
  background-color: #f3f4f6;
  padding-left: 44px;
  padding-top: 2px;
`;
