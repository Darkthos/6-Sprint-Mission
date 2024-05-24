import { styled } from "styled-components";
import Description from "../../components/Text/Description";
import Price from "../../components/Text/Price";
import Favorite from "../../components/Favorite";
import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function CommonProduct({ id, src, text, price, favorite }) {
  return (
    <ProductBox to={`/items/${id}`}>
      <CommonProductImg id={id} src={src} />
      <ProductTextBox>
        <Description text={text + " 팝니다"} />
        <Price price={price} />
        <Favorite favorite={favorite} />
      </ProductTextBox>
    </ProductBox>
  );
}
//
export default CommonProduct;
export const ProductBox = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CommonProductImg = styled.img`
  ${PC_SIZE} {
    width: 221px;
  }
  ${TABLET_SIZE} {
    width: 221px;
  }
  aspect-ratio: 1 / 1;
  min-width: 168px;
  width: 100%;
  border-radius: 19.46px;
`;
export const ProductTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
