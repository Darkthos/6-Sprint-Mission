import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import Dropdown from "~/components/Dropdown";
import { CommonProductContext } from "~/hook/Context/Context";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import orderByIcon from "~assets/icon/sort.png";

function ProductOrderBy() {
  const [isView, setIsView] = useState(false);

  const handleClickDropbox = () => {
    setIsView(!isView);
  };

  const handleBlurDropbox = () => {
    setTimeout(() => {
      setIsView(!isView);
    }, 200);
  };

  const ORDER_BY = {
    RECENT: "최신순",
    FAVORITE: "좋아요",
  };

  const { RECENT, FAVORITE } = ORDER_BY;

  const [text, setText] = useState(RECENT);

  const onRecentClick = () => {
    handleOrderByRecent();
    setText(RECENT);
  };

  const onFavoriteClick = () => {
    handleOrderByFavorite();
    setText(FAVORITE);
  };

  const { handleOrderByFavorite, handleOrderByRecent } = useContext(CommonProductContext);

  return (
    <ProductOrderByTag onClick={handleClickDropbox} tabIndex={0} onBlur={handleBlurDropbox}>
      <ProductOrderBySelect>{text}</ProductOrderBySelect>
      <img src={orderByIcon} />
      <Dropdown view={isView} onRecentClick={onRecentClick} onFavoriteClick={onFavoriteClick} ORDER_BY={ORDER_BY} />
    </ProductOrderByTag>
  );
}

export default ProductOrderBy;
export const ProductOrderByTag = styled.a`
  ${PC_SIZE} {
    position: relative;
    width: 130px;
    height: 42px;
    gap: 24px;
    padding-left: 20px;
  }
  ${TABLET_SIZE} {
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
  ${PC_SIZE} {
    display: inline-block;
  }
  ${TABLET_SIZE} {
    display: inline-block;
  }
  display: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #1f2937;
`;
