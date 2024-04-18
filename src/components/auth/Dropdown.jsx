import { useContext, useState } from "react";
import { styled } from "styled-components";
import { CommonProductContext } from "~/hook/Context";

function Dropdown({ view, onRecentClick, onFavoriteClick }) {
  return (
    <DropdownBox view={view}>
      <DropdownTag onClick={onRecentClick}>최신순</DropdownTag>
      <DropdownTag lastText onClick={onFavoriteClick}>
        좋아요
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
  position: absolute;
  bottom: -90px;
  right: 0;
  border: 1px solid #e5e7eb;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  background-color: white;
  width: 130px;
  ${(props) => (props.view ? "display: hidden;" : "display: none;")}
`;
