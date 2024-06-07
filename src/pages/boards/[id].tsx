import getArticlesId from "@/apis/article/getArticlesId";
import { ArticleId } from "@/types/articles";
import formatDateString from "@/utils/formatDate";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import userIcon from "@/assets/icons/user_passive_ic.svg";
import heartIcon from "@/assets/icons/heart_ic.svg";
import Image from "next/image";
import { hstack } from "@/styled-system/patterns";
import { css, cx } from "@/styled-system/css";
import { subTitle } from "@/css/common/text.styled";
import Comment, { CommentInp } from "@/components/shared/Comment";
import getArticlesIdComment from "@/apis/comment/getArticlesIdComment";
import backIcon from "@/assets/icons/back_ic.svg";
import { buttonRecipe } from "@/css/recipe/buttonRecipe.styled";
import Link from "next/link";
import { inputRecipe } from "@/css/recipe/inputRecipe.styled";
import noCommentImage from "@/assets/images/no-comment.png";
import Header from "@/components/shared/Header/Header";

function BoardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [postDetail, setPostDetail] = useState<ArticleId>();
  const [comments, setComments] = useState<CommentInp[]>([]);

  useEffect(() => {
    const loadArticlesId = async () => {
      if (id) {
        const response = await getArticlesId(id);
        setPostDetail(response);
        console.log(response);
      }
    };
    loadArticlesId();
  }, [id]);

  useEffect(() => {
    const loadComment = async () => {
      const response = await getArticlesIdComment(id);
      setComments(response.list);
      console.log(response.list);
    };
    loadComment();
  }, []);

  const {
    content = "",
    image = null,
    likeCount = 0,
    title = "",
    updatedAt = "",
    writer = { id: 0, nickname: "" },
  } = postDetail || {};

  const postDate = formatDateString(updatedAt);

  return (
    <>
      <Header />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: { base: "24px 16px", md: "24px 24px", xl: "32px" },
          maxW: "1200px",
          margin: "auto",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          })}
        >
          <h1 className={subTitle}>{title}</h1>
          <div className={hstack()}>
            <Image src={userIcon} alt="유저얼굴" />
            <p>{writer.nickname}</p>
            <p>{postDate}</p>
            <div className={hstack({ borderLeft: "1px solid #DFDFDF" })}>
              <Image
                width={24}
                src={heartIcon}
                alt="하트 아이콘"
                className={css({ marginLeft: "16px" })}
              />
              <p>{likeCount}</p>
            </div>
          </div>
        </div>
        <p className={css({ minH: "80px" })}>{content}</p>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          })}
        >
          <label className={subTitle}>댓글 달기</label>
          <textarea
            className={inputRecipe({ visual: "large" })}
            placeholder="댓글을 입력해주세요."
          />
          <button
            className={cx(
              buttonRecipe({ visual: "smallDisabled" }),
              css({ marginLeft: "auto", cursor: "pointer" })
            )}
          >
            등록
          </button>
        </div>
        {comments && comments.length > 0 ? (
          <div className={css({ marginBottom: "24px" })}>
            {comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
          </div>
        ) : (
          <Image
            src={noCommentImage}
            alt="댓글이 없네요"
            className={css({ margin: "auto" })}
          />
        )}
        <Link href="../" className={buttonRecipe({ visual: "large" })}>
          목록으로 돌아가기
          <Image src={backIcon} alt="돌아가기" />
        </Link>
      </div>
    </>
  );
}

export default BoardDetail;
