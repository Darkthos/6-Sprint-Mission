import getArticles from "@/apis/article/getArticles";
import React, { useEffect, useMemo, useState } from "react";
import BestPostCard from "./bestPostComponents/BestPostCard";
import { hstack } from "@/styled-system/patterns";
import useResponsive from "@/hooks/useResponsive";
import { bestPostContainer } from "./boards.styled";
import { Article } from "@/types/articles";
import { useRouter } from "next/router";

function BestPost() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const { isPc, isTablet } = useResponsive();

  const pageSize = useMemo(() => {
    return isPc ? 3 : isTablet ? 2 : 1;
  }, [isPc, isTablet]);

  useEffect(() => {
    const loadArticles = async () => {
      const receive = await getArticles({ pageSize });
      setArticles(receive.list);
    };
    loadArticles();
  }, [pageSize]);

  return (
    <div className={bestPostContainer}>
      <div className={hstack({ gap: "16px", cursor: "pointer" })}>
        {articles?.map((article) => {
          return <BestPostCard key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
}

export default BestPost;
