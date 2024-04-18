import React from "react";
import { styled } from "styled-components";
import AdditemHeader from "./AdditemHeader";
import AddImgForm from "./AddImgForm";
import AddTextForm from "./AddTextForm";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function AddItem(props) {
  return (
    <>
      <AdditemHeader />
      <AddItemTag>
        <AddImgForm />
        <AddTextForm />
      </AddItemTag>
    </>
  );
}

export default AddItem;
export const AddItemTag = styled.div`
  ${PC_SIZE} {
    max-width: 1224px;
  }
  ${TABLET_SIZE} {
    padding: 0 24px 0 24px;
  }
  padding: 0 15px 0 15px;
  margin: auto;
  width: 100%;
`;
