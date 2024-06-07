import Form from "@/components/addBoardComponents/Form";
import FormTitle from "@/components/addBoardComponents/FormTitle";
import Header from "@/components/shared/Header/Header";
import { css } from "@/styled-system/css";
import React from "react";

function AddBoard() {
  return (
    <div>
      <Header />
      <div
        className={css({
          m: "auto",
          maxW: "1200px",
          p: { base: "16px", md: "16px 24px", xl: "24px" },
        })}
      >
        <FormTitle />
        <Form />
      </div>
    </div>
  );
}

export default AddBoard;
