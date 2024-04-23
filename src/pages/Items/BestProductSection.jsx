import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import BestProduct from "./BestProduct";
import SubTitle from "../../components/Text/SubTitle";
import getProducts from "~/apis/productapi";

function BestProductSection() {
  const [productLists, setProductLists] = useState([]);

  async function loadAndSortProducts() {
    const { list } = await getProducts();
    const sortedList = sortByFavoriteCount(list);
    setProductLists(sortedList);
  }

  function sortByFavoriteCount(products) {
    return [...products].sort((a, b) => b.favoriteCount - a.favoriteCount);
  }

  useEffect(() => {
    loadAndSortProducts();
  }, []);

  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 744px)" });

  const pageSizes = {
    pc: 4,
    tablet: 2,
    mobile: 1,
  };

  const { pc, tablet, mobile } = pageSizes;

  const perPageSize = isPc ? pc : isTablet ? tablet : mobile;
  const productsToShow = productLists.slice(0, perPageSize);

  return (
    <>
      <BestSubTitleTag>
        <SubTitle text="베스트 상품" />
      </BestSubTitleTag>
      <FlexProductTag>
        {productsToShow.map((product) => (
          <BestProduct
            key={product.id}
            id={product.id}
            src={product.images}
            text={product.name}
            price={product.price}
            favorite={product.favoriteCount}
          />
        ))}
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
