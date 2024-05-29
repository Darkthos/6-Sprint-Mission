import { buttonRecipe } from "@/css/recipe/buttonRecipe.styled";
import { hstack } from "@/styled-system/patterns";
import Link from "next/link";
import SearchBar from "../shared/SearchBar";
import SortBy from "../shared/SortBy";
import { useEffect, useState } from "react";
import { Article } from "./BestPost";
import getArticles from "@/apis/article/getArticles";
import NormalPostCard from "./normalPostComponents/NormalPostCard";
import { subTitle } from "@/css/common/text.styled";
import { normalPostContainer } from "@/css/boards.styled";
import DropBox from "../shared/DropBox";
import { css } from "@/styled-system/css";

function NormalPost() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [sortByText, setSortByText] = useState("최신순");
  const [isDropBox, setIsDropBox] = useState(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOrderByRecent = () => {
    setOrderBy("recent");
    setSortByText("최신순");
  };

  const handleOrderByLike = () => {
    setOrderBy("like");
    setSortByText("좋아요순");
  };

  useEffect(() => {
    const loadArticles = async () => {
      const receive = await getArticles({
        orderBy: [orderBy],
        keyword: [searchValue],
      });
      setArticles(receive.list);
    };
    loadArticles();
  }, [searchValue, orderBy]);

  return (
    <div className={normalPostContainer}>
      <div className={hstack({ justifyContent: "space-between" })}>
        <h2 className={subTitle}>게시글</h2>
        <Link href="/" className={buttonRecipe({ visual: "small" })}>
          글쓰기
        </Link>
      </div>

      <div
        className={hstack({
          justifyContent: "space-between",
          gap: { base: "8px", md: "16px" },
        })}
      >
        <SearchBar onChangeInput={onChangeInput} searchValue={searchValue} />
        <div
          className={css({ position: "relative" })}
          onClick={() => setIsDropBox(!isDropBox)}
          onBlur={() => setIsDropBox(false)}
          tabIndex={0}
        >
          <SortBy sortByText={sortByText} />
          <div className={css({ position: "absolute", top: "46px" })}>
            <DropBox
              open={isDropBox}
              recent={handleOrderByRecent}
              like={handleOrderByLike}
            />
          </div>
        </div>
      </div>
      {articles.map((article) => {
        return <NormalPostCard article={article} key={article.id} />;
      })}
    </div>
  );
}

export default NormalPost;
