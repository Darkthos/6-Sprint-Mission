import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import userIcon from "~/assets/icon/user.png";

function FullCommentForm({ comment }) {
  const today = new Date();
  const currentTime = today.getTime();
  const updateTime = new Date(comment.updatedAt).getTime();
  const commentTime = Math.round((currentTime - updateTime) / (3600000 * 24));

  return (
    <FullCommentContainer>
      <FullCommentContentTag>{comment.content}</FullCommentContentTag>
      <FullCommentImg src={comment.writer.image} />
      <FullCommentNicknameTag>
        {comment.writer.nickname !== undefined ? comment.writer.nickname : userIcon}
      </FullCommentNicknameTag>
      <FullCommentUpdateTag>{commentTime}일 전</FullCommentUpdateTag>
    </FullCommentContainer>
  );
}

export default FullCommentForm;
export const FullCommentContainer = styled.div`
  ${PC_SIZE} {
  }
  ${TABLET_SIZE} {
  }
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
  height: 110px;
`;
export const FullCommentContentTag = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #1f2937;
`;
export const FullCommentImg = styled.img`
  position: absolute;
  bottom: 24px;
  left: 0px;
  background-size: cover;
  width: 40px;
  height: 40px;
`;
export const FullCommentNicknameTag = styled.p`
  position: absolute;
  bottom: 47px;
  left: 48px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  color: #4b5563;
`;
export const FullCommentUpdateTag = styled.p`
  position: absolute;
  bottom: 29px;
  left: 48px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  color: #9ca3af;
`;
