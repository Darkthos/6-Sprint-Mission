import React, { useState } from "react";
import { styled } from "styled-components";
import AdditemHeader from "./AddItemsComponents/AdditemHeader";
import AddImgForm from "./AddItemsComponents/AddImgForm";
import AddTextForm from "./AddItemsComponents/AddTextForm";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import FormContext from "~/hook/Context/FormContext";

function AddItem(props) {
  const [isFormValid, setIsFormValid] = useState(false);
  return (
    <>
      <FormContext.Provider value={{ isFormValid, setIsFormValid }}>
        <AdditemHeader />
        <AddItemTag>
          <AddImgForm />
          <AddTextForm />
        </AddItemTag>
      </FormContext.Provider>
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
