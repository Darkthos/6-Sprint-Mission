import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import getProducts from "~/apis/productapi";
import CommonProduct from "./CommonProduct";
import SubTitle from "../auth/Text/SubTitle";

function CommonProductSection() {
  const [bestProduct, setCommonProduct] = useState([]);
  function sortByUpdatedAt(products) {
    return products.sort((a, b) => b["updatedAt"] - a["updatedAt"]);
  }

  async function loadCommonProduct() {
    let result;
    result = await getProducts();
    const { list } = result;
    setCommonProduct(sortByUpdatedAt(list));
  }
  //updatedat 수정하자 이거잘못됫어 Date를 update로 빼고 값작은 순서대로앞으로
  useEffect(() => {
    loadCommonProduct();
  }, []);
  const isPc = useMediaQuery({ query: "(min-width: 1201px)" });
  const isIpadMini = useMediaQuery({ query: "(min-width: 744px)" });

  const perPageSize = isPc ? 10 : isIpadMini ? 6 : 3;
  const productsToShow = bestProduct.slice(0, perPageSize);

  return (
    <>
      <SubTitle text="베스트 상품" />
      <FlexProductTag>
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
      </FlexProductTag>
    </>
  );
}

export default CommonProductSection;
export const FlexProductTag = styled.div`
  display: flex;
  gap: 24px;
  margin: 16px 16px 24px 16px;
`;
