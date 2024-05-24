import { useContext, useState } from "react";
import { styled } from "styled-components";
import { CommonProductContext } from "~/hook/Context/Context";
import { TABLET_SIZE } from "~/utils/themes";

function Dropdown({ view, onRecentClick, onFavoriteClick, ORDER_BY }) {
  const { RECENT, FAVORITE } = ORDER_BY;
  return (
    <DropdownBox view={view}>
      <DropdownTag onClick={onRecentClick}>{RECENT}</DropdownTag>
      <DropdownTag lastText onClick={onFavoriteClick}>
        {FAVORITE}
      </DropdownTag>
    </DropdownBox>
  );
}

export default Dropdown;
export const DropdownTag = styled.p`
  font-size: 16px;
  height: 42px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  padding-top: 9px;
  border-bottom: ${(props) => (props.lastText ? "none" : "1px solid #e5e7eb;")};
`;
export const DropdownBox = styled.div`
  ${TABLET_SIZE} {
    width: 120px;
  }
  position: absolute;
  bottom: -90px;
  right: 0;
  border: 1px solid #e5e7eb;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  background-color: white;
  width: 130px;
  visibility: ${(props) => (props.view ? "visible" : "hidden")};
`;
