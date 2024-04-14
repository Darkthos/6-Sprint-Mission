import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import CommonProduct from "./CommonProduct";
import SubTitle from "../auth/Text/SubTitle";

function CommonProductSection({ productLists }) {
  function sortByFavoriteCount(products) {
    return products.sort((a, b) => b["favoriteCount"] - a["favoriteCount"]);
  }
  sortByFavoriteCount(productLists);
  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isIpadMini = useMediaQuery({ query: "(min-width: 744px)" });

  const prevPageSize = isPc ? 4 : isIpadMini ? 2 : 1;
  const nextPageSize = isPc ? 14 : isIpadMini ? 8 : 5;
  const perPageSize = isPc ? 5 : isIpadMini ? 3 : 2;
  const productsToShow = productLists.slice(prevPageSize, nextPageSize);

  return (
    <>
      <GridProductTag>
        {productsToShow.slice().map((product) => {
          return (
            <CommonProduct
              key={product.id}
              id={product.id}
              src={product.images}
              text={product.name}
              price={product.price}
              favorite={product.favoriteCount}
            />
          );
        })}
      </GridProductTag>
    </>
  );
}

export default CommonProductSection;
export const GridProductTag = styled.div`
  @media screen and (min-width: 1201px) {
    grid-template-columns: repeat(5, 221px);
    grid-template-rows: repeat(2, 301px);
    grid-row-gap: 40px;
    grid-column-gap: 24px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 221px);
    grid-template-rows: repeat(2, 301px);
    grid-row-gap: 40px;
    grid-column-gap: 16px;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 32px; /* 행 간격을 10px로 설정합니다. */
  grid-column-gap: 8px;
  margin: 24px auto 40px auto;
`;
