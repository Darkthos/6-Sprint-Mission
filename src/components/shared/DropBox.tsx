import { dropBoxContainer, dropBoxTextStyle } from "@/css/common/common.styled";
import { css } from "@/styled-system/css";
import { MouseEventHandler } from "react";

interface DropBoxProps {
  open?: boolean;
  recent?: MouseEventHandler<HTMLDivElement>;
  like?: MouseEventHandler<HTMLDivElement>;
}

function DropBox({ open = false, recent, like }: DropBoxProps) {
  return (
    <>
      {open && (
        <div className={dropBoxContainer}>
          <p
            className={`${dropBoxTextStyle} ${css({ borderBottom: "1px solid #E5E7EB" })}`}
            onClick={recent}
          >
            최신순
          </p>
          <p className={dropBoxTextStyle} onClick={like}>
            좋아요순
          </p>
        </div>
      )}
    </>
  );
}

export default DropBox;