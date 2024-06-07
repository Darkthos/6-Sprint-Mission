import Form from "@/components/addBoardComponents/Form";
import FormTitle from "@/components/addBoardComponents/FormTitle";
import Header from "@/components/shared/Header/Header";
import React from "react";

function AddBoard() {
  return (
    <div>
      <Header />
      <div>
        <FormTitle />
        <Form />
      </div>
    </div>
  );
}

export default AddBoard;
