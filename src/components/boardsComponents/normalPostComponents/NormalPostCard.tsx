import Image from "next/image";
import { Article } from "../BestPost";
import { hstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import userPassiveIcon from "@/assets/icons/user_passive_ic.svg";
import heartIcon from "@/assets/icons/heart_ic.svg";
import {
  PostCardFooter,
  articleImageStyle,
  articleTextStyle,
  normalPostCardContainer,
} from "@/css/boards.styled";

interface BestPostCardProps {
  article: Article;
}

function NormalPostCard({ article }: BestPostCardProps) {
  const { image, likeCount, title, updatedAt, writer } = article;

  return (
    <div className={normalPostCardContainer}>
      <div className={hstack({ alignItems: "normal" })}>
        <h2 className={articleTextStyle}>{title}</h2>
        {image && (
          <img
            src={image}
            alt="normalArticleImage"
            className={articleImageStyle}
          />
        )}
      </div>
      <div className={PostCardFooter}>
        <Image
          src={userPassiveIcon}
          alt="userPassiveIcon"
          className={css({ w: "24px" })}
        />
        <p>{writer.nickname}</p>
        <p className={css({ flexGrow: 1 })}>2024.04.16</p>
        <div className={hstack({ gap: "4px" })}>
          <Image src={heartIcon} alt="heartIcon" />
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
}

export default NormalPostCard;
