import { buttonRecipe } from "@/css/recipe/buttonRecipe.styled";
import { hstack } from "@/styled-system/patterns";
import Link from "next/link";
import SearchBar from "../shared/SearchBar";
import SortBy from "../shared/SortBy";
import { useEffect, useMemo, useState } from "react";
import { Article } from "./BestPost";
import getArticles from "@/apis/article/getArticles";
import NormalPostCard from "./normalPostComponents/NormalPostCard";
import { subTitle } from "@/css/common/text.styled";
import { normalPostContainer } from "@/css/boards.styled";
import DropBox from "../shared/DropBox";
import { css } from "@/styled-system/css";
import useToggle from "@/hooks/useToggle";

const sortOptions = {
  recent: "recent",
  like: "like",
} as const;

type SortKey = keyof typeof sortOptions;
// 원시값은 타입추론을 알아서해서 제네릭설정 안해도됨.
function NormalPost() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [orderBy, setOrderBy] = useState<SortKey>("recent");
  const [sortByText, setSortByText] = useState("최신순");
  const [dropBoxToggle, dropBoxHandleToggle] = useToggle(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const handleSortChange = (key: SortKey, text: string) => {
    setOrderBy(key);
    setSortByText(text);
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

  const renderedArticles = useMemo(() => {
    return articles.map((article) => {
      return <NormalPostCard key={article.id} article={article} />;
    });
  }, [articles]);

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
          onBlur={dropBoxHandleToggle}
          tabIndex={0}
        >
          <SortBy sortByText={sortByText} toggle={dropBoxHandleToggle} />
          <div className={css({ position: "absolute", top: "46px" })}>
            <DropBox
              open={dropBoxToggle}
              toggle={dropBoxHandleToggle}
              recent={() => handleSortChange("recent", "최신순")}
              like={() => handleSortChange("like", "좋아요순")}
            />
          </div>
        </div>
      </div>
      {renderedArticles}
    </div>
  );
}

export default NormalPost;
