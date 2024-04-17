import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Dropdown from "~/components/auth/Dropdown";
import orderByIcon from "~assets/icon/sort.png";

function ProductOrderBy({ text = "최신순", onFavoriteSortBy, onUpdatedSortBy }) {
  const [isView, setIsView] = useState(false);

  const handleClickDropbox = () => {
    setIsView(!isView);
  };

  const handleBlurDropbox = () => {
    setTimeout(() => {
      setIsView(false);
    }, 200);
  };

  return (
    <ProductOrderByTag onClick={handleClickDropbox} tabIndex={0} onBlur={handleBlurDropbox}>
      <ProductOrderBySelect>{text}</ProductOrderBySelect>
      <img src={orderByIcon} />
      <Dropdown view={isView} onFavoriteSortBy={onFavoriteSortBy} onUpdatedSortBy={onUpdatedSortBy} />
    </ProductOrderByTag>
  );
}

export default ProductOrderBy;
export const ProductOrderByTag = styled.a`
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
  cursor: pointer;
`;
export const ProductOrderBySelect = styled.a`
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
