import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import CommonProduct from "./CommonProduct";
import Pagination from "./Pagination";
import ProductControlPanel from "./ProductControlPanel/ProductControlPanel";

function CommonProductSection({ productLists }) {
  const [commonProducts, setCommonProducts] = useState([]);
  const [pageCounts, setPageCounts] = useState();
  const [orderBy, setOrderBy] = useState([]);

  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 744px)" });

  const pageSizes = {
    pc: { prev: 4, next: 14, perPage: 10 },
    tablet: { prev: 2, next: 8, perPage: 6 },
    mobile: { prev: 1, next: 5, perPage: 4 },
  };
  const { prev, next, perPage } = pageSizes[isPc ? "pc" : isTablet ? "tablet" : "mobile"];

  let productsToShow = productLists.slice(prev, next);
  const pageCount = Math.ceil(14 / perPage);

  useEffect(() => {
    setPageCounts(pageCount);
  }, [pageCount]);
  const pages = Array.from({ length: pageCounts }, (_, index) => index + 1);
  return (
    <>
      <ProductControlPanel />
      <GridProductTag>
        {productsToShow.map((product) => {
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
      <FlexPagination>
        <Pagination itemsPageNumber="<" />
        {pages.map((page) => (
          <Pagination key={page} itemsPageNumber={page} />
        ))}

        <Pagination itemsPageNumber=">" />
      </FlexPagination>
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
    margin: 24px auto 40px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 221px);
    grid-template-rows: repeat(2, 301px);
    grid-row-gap: 40px;
    grid-column-gap: 16px;
    margin: 24px auto 40px;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 32px;
  grid-column-gap: 8px;
  margin: 16px auto 40px;
  width: 100%;
  justify-content: center;
`;

export const FlexPagination = styled.div`
  @media screen and (min-width: 1201px) {
    margin-bottom: 113px;
  }
  @media screen and (min-width: 744px) and (max-width: 1200px) {
    margin-bottom: 59px;
  }
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 82px;
`;
