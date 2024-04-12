import { styled } from "styled-components";
import React from "react";
import Pagecircle from "./Pagecircle";

function Pagenation({ text }) {
  return (
    <PagenationTag>
      <Pagecircle text="<" />
      <Pagecircle text="1" />
      <Pagecircle text="2" />
      <Pagecircle text="3" />
      <Pagecircle text="4" />
      <Pagecircle text="5" />
      <Pagecircle text=">" />
    </PagenationTag>
  );
}

export default Pagenation;
export const PagenationTag = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 4px;
`;
