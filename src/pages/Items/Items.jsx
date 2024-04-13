import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { axiosInstance } from "~/apis/axiosInstance";
import BestProductSection from "~/components/Items/BestProductSection";
import CommonProductSection from "~/components/Items/CommonProductSection";
import ItemsHeader from "~/components/Items/ItemsHeader";
import ProductControlPanel from "~/components/Items/ProductControlPanel/ProductControlPanel";

function Items() {
  // const [productList, setProductList] = useState([]);
  // const [count, setTotalCount] = useState(0);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/products")
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setProductList(data?.list);
  //       setTotalCount(data?.totalCount);
  //       const loadProducts = data.list[0].images;
  //     });
  // }, []);
  return (
    <>
      <ItemsHeader />
      <BestProductSection />
      <ProductControlPanel />
      <CommonProductSection />
    </>
  );
}

export default Items;
export const ItemsTag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: auto 16px;
`;
