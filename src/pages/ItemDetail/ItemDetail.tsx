import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProductDetail from "~/apis/productDetailapi";
import ItemsHeader, { NavBorderLine } from "~pages/Items/ItemsHeader";
import { styled } from "styled-components";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";
import getProductComments from "~/apis/productCommentapi";
import { BackItemsButton, EmptyCommentForm, FullCommentForm, Inquiry, ProductDetails } from "./ItemDetailComponents";

function ItemDetail() {
  const idParams = useParams();
  const [productData, setProductData] = useState({});
  const [productComments, setProductComments] = useState([]);

  async function loadProductDetail() {
    let result;
    result = await getProductDetail(idParams.id);
    setProductData(result);
  }

  async function loadProductComments() {
    let result;
    result = await getProductComments(idParams.id);
    setProductComments(result.list);
    console.log(result.list);
  }

  useEffect(() => {
    loadProductDetail();
    loadProductComments();
  }, []);

  const { images, favoriteCount, tags, name, description, price } = productData;

  return (
    <>
      <ItemsHeader />
      <ItemDetailTag>
        <ProductDetails
          img={images}
          favorite={favoriteCount}
          tags={tags}
          name={name}
          description={description}
          price={price}
        />
        <NavBorderLine style={{ marginTop: "16px" }} />
        <Inquiry />
        {productComments.length < 1 ? (
          <EmptyCommentForm />
        ) : (
          <FullCommentFormTag>
            {productComments.map((comment) => (
              <FullCommentForm key={crypto.randomUUID()} comment={comment} />
            ))}
          </FullCommentFormTag>
        )}
        <BackItemsButton />
      </ItemDetailTag>
    </>
  );
}

export default ItemDetail;
export const ItemDetailTag = styled.div`
  ${PC_SIZE} {
  }
  ${TABLET_SIZE} {
    padding: 0 24px 0 24px;
  }
  max-width: 1249px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px 0 16px;
  margin: auto;
`;
export const FullCommentFormTag = styled.div`
  ${PC_SIZE} {
    margin: 24px 0 40px 0;
  }
  ${TABLET_SIZE} {
    margin: 24px 0 40px 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px 0 40px 0;
  gap: 24px;
  width: 100%;
  height: 100%;
`;
