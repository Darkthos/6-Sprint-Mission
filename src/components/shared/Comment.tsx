import Image from "next/image";
import userIcon from "@/assets/icons/user_passive_ic.svg";
import addlockIcon from "@/assets/icons/addlock-ic.svg";
import formatDateString from "@/utils/formatDate";
import { hstack, vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";

export interface CommentInp {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image?: string;
  };
}

function Comment({ comment }: { comment: CommentInp }) {
  const { content, createdAt, writer } = comment;
  const CommentDate = formatDateString(createdAt);

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minH: "81px",
        borderBottom: "1px solid #DFDFDF",
        gap: "16px",
        padding: { base: "16px", md: "24px" },
      })}
    >
      <p>{content}</p>
      <div className={hstack()}>
        <Image width={32} src={userIcon} alt="유저얼굴" />
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          })}
        >
          <p
            className={css({
              color: "#4b5563",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "14px",
            })}
          >
            {writer.nickname}
          </p>
          <p
            className={css({
              color: "#9ca3af",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "14px",
            })}
          >
            {CommentDate}
          </p>
        </div>
      </div>
      <Image
        src={addlockIcon}
        alt="더보기..."
        className={css({
          position: "absolute",
          top: "0px",
          right: "0px",
        })}
      />
    </div>
  );
}

export default Comment;
