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
  const isIpadMini = useMediaQuery({ query: "(min-width: 744px)" });

  const prevPageSize = isPc ? 4 : isIpadMini ? 2 : 1;
  const nextPageSize = isPc ? 14 : isIpadMini ? 8 : 5;
  const perPageSize = isPc ? 5 : isIpadMini ? 3 : 2;

  let productsToShow = productLists.slice(prevPageSize, nextPageSize);
  const pageCount = Math.ceil(14 / productsToShow.length);

  useEffect(() => {
    setPageCounts(pageCount);
  }, [pageCount]);

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
        <Pagination itemsPageNumber={pageCounts} />
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
