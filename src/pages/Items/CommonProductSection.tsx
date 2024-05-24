import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import CommonProduct from "./CommonProduct";
import Pagination from "./Pagination";
import ProductControlPanel from "./ProductControlPanel/ProductControlPanel";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

import { CommonProductContext } from "~/hook/Context/Context.js";
import getProducts from "~/apis/productapi";

function CommonProductSection() {
  const [pageCounts, setPageCounts] = useState();
  const [orderBy, setOrderBy] = useState(["recent"]);
  const [productLists, setProductLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function loadProduct() {
    let result;
    result = await getProducts(options);
    const { list } = result;
    setProductLists(list);
  }

  const handleOrderByRecent = () => {
    setOrderBy("recent");
  };

  const handleOrderByFavorite = () => {
    setOrderBy("favorite");
  };

  useEffect(() => {
    loadProduct();
  }, [orderBy, currentPage]);

  const handlePagination = (pageNumber) => {
    if (pageNumber === "<") {
      setCurrentPage(Math.max(1, currentPage - 1));
    } else if (pageNumber === ">") {
      setCurrentPage(Math.min(pageCount, currentPage + 1));
    } else {
      setCurrentPage(Number(pageNumber));
    }
  };
  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 744px)" });

  const pageSizes = {
    pc: { prev: 4, next: 14, perPage: 10 },
    tablet: { prev: 2, next: 8, perPage: 6 },
    mobile: { prev: 1, next: 5, perPage: 4 },
  };
  const { prev, next, perPage } =
    pageSizes[isPc ? "pc" : isTablet ? "tablet" : "mobile"];
  let productsToShow = productLists.slice(0, perPage);
  const pageCount = Math.ceil(14 / perPage);
  const pages = Array.from({ length: pageCounts }, (_, index) => index + 1);

  useEffect(() => {
    setPageCounts(pageCount);
  }, [pageCount]);
  let options = {
    page: currentPage,
    pageSize: perPage,
    orderBy: orderBy,
  };
  return (
    <>
      <CommonProductContext.Provider
        value={{ handleOrderByFavorite, handleOrderByRecent }}
      >
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
          <Pagination itemsPageNumber="<" handlePagination={handlePagination} />
          {pages.map((page) => (
            <Pagination
              key={page}
              itemsPageNumber={page}
              handlePagination={handlePagination}
              isActive={currentPage === page}
            />
          ))}

          <Pagination itemsPageNumber=">" handlePagination={handlePagination} />
        </FlexPagination>
      </CommonProductContext.Provider>
    </>
  );
}

export default CommonProductSection;
export const GridProductTag = styled.div`
  ${PC_SIZE} {
    grid-template-columns: repeat(5, 221px);
    grid-template-rows: repeat(2, 301px);
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    margin: 24px auto 40px;
  }
  ${TABLET_SIZE} {
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
  ${PC_SIZE} {
    margin-bottom: 113px;
  }
  ${TABLET_SIZE} {
    margin-bottom: 59px;
  }
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 82px;
`;
