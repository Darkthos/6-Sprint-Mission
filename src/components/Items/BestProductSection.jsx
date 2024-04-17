import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import BestProduct from "./BestProduct";
import SubTitle from "../auth/Text/SubTitle";

function BestProductSection({ productLists }) {
  function sortByFavoriteCount(products) {
    return products.sort((a, b) => b["favoriteCount"] - a["favoriteCount"]);
  }

  sortByFavoriteCount(productLists);
  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 744px)" });

  const perPageSize = isPc ? 4 : isTablet ? 2 : 1;
  const productsToShow = productLists.slice(0, perPageSize);

  return (
    <>
      <BestSubTitleTag>
        <SubTitle text="베스트 상품" />
      </BestSubTitleTag>
      <FlexProductTag>
        {productsToShow.map((product) => {
          return (
            <BestProduct
              key={product.id}
              id={product.id}
              src={product.images}
              text={product.name}
              price={product.price}
              favorite={product.favoriteCount}
            />
          );
        })}
      </FlexProductTag>
    </>
  );
}

export default BestProductSection;
export const FlexProductTag = styled.div`
  @media screen and (min-width: 1201px) {
    width: 1201px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    width: 696px;
  }
  width: 343px;
  margin: auto;
  display: flex;
  gap: 24px;
`;
export const BestSubTitleTag = styled.div`
  @media screen and (min-width: 1201px) {
    margin: 24px 0 16px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    margin: 24px 0 16px;
  }
  margin: 16px 0 16px;
`;
