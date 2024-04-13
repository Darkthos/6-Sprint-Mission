import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import getProducts from "~/apis/productapi";
import BestProduct from "./BestProduct";
import SubTitle from "../auth/Text/SubTitle";

function BestProductSection() {
  const [bestProduct, setBestProduct] = useState([]);
  function sortByFavoriteCount(products) {
    return products.sort((a, b) => b["favoriteCount"] - a["favoriteCount"]);
  }

  async function loadBestProduct() {
    let result;
    result = await getProducts();
    const { list } = result;
    setBestProduct(sortByFavoriteCount(list));
  }

  useEffect(() => {
    loadBestProduct();
  }, []);
  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isIpadMini = useMediaQuery({ query: "(min-width: 744px)" });

  const perPageSize = isPc ? 4 : isIpadMini ? 2 : 1;
  const productsToShow = bestProduct.slice(0, perPageSize);

  return (
    <>
      <SubTitle text="베스트 상품" />
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
  display: flex;
  gap: 24px;
  margin: 16px 16px 24px 16px;
`;
