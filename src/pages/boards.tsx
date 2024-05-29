import BestPost from "@/components/boardsComponents/BestPost";
import NormalPost from "@/components/boardsComponents/NormalPost";
import Header from "@/components/shared/Header";
import { boardsContainer } from "@/css/boards.styled";
import { subTitle } from "@/css/common/text.styled";
import { vstack } from "@/styled-system/patterns";

function Boards() {
  return (
    <div>
      <Header />
      <div className={boardsContainer}>
        <h2 className={subTitle}>베스트 게시글</h2>
        <div className={vstack()}>
          <BestPost />
          <NormalPost />
        </div>
      </div>
    </div>
  );
}

export default Boards;
