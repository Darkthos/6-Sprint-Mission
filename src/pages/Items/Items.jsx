import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { axiosInstance } from "~/apis/axiosInstance";
import BestProductSection from "~/components/Items/BestProductSection";
import CommonProductSection from "~/components/Items/CommonProductSection";
import ItemsHeader from "~/components/Items/ItemsHeader";
import getProducts from "~/apis/productapi";

function Items() {
  const [productLists, setProductLists] = useState([]);

  async function loadProduct() {
    let result;
    result = await getProducts();
    const { list } = result;
    setProductLists(list);
    console.log(list);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <ItemsHeader />
      <ItemsMain>
        <BestProductSection productLists={productLists} />

        <CommonProductSection productLists={productLists} />
      </ItemsMain>
    </>
  );
}

export default Items;
export const ItemsMain = styled.div`
  max-width: 1249px;
  width: 100%;
  margin: auto;
  padding: 0 24px 0 24px;
  position: relative;
`;
