import { hstack } from "@/styled-system/patterns";
import { Article } from "../BestPost";
import bestArticleImage from "@/assets/images/best-article.png";
import Image from "next/image";
import heartIcon from "@/assets/icons/heart_ic.svg";
import {
  PostCardFooter,
  articleImageStyle,
  articleTextStyle,
  bestPostCardContainer,
} from "@/css/boards.styled";
// {image && <Image src={image} alt="articleImage" />}
interface BestPostCardProps {
  article: Article;
}

function BestPostCard({ article }: BestPostCardProps) {
  const { createdAt, image, likeCount, title, updatedAt, writer } = article;
  return (
    <div className={bestPostCardContainer}>
      <Image src={bestArticleImage} alt="bestArticleImage" />
      <div className={hstack({ alignItems: "normal" })}>
        <h2 className={articleTextStyle}>{title}</h2>
        {image && (
          <img
            src={image}
            alt="bestArticleImage"
            className={articleImageStyle}
          />
        )}
      </div>
      <div className={PostCardFooter}>
        <p>{writer.nickname}</p>
        <div className={hstack({ gap: "4px", flexGrow: 1 })}>
          <Image src={heartIcon} alt="heartIcon" />
          <p>{likeCount}</p>
        </div>
        <p>2024.04.16</p>
      </div>
    </div>
  );
}

export default BestPostCard;
