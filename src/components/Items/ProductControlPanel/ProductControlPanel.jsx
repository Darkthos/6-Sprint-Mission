import { styled } from "styled-components";
import Button from "~/components/auth/Button";
import SubTitle from "~/components/auth/Text/SubTitle";
import ProductOrderBy from "./ProductOrderBy";
import ProductSearch from "./ProductSearch";

function ProductControlPanel(props) {
  return (
    <ProductControlPanelTag>
      <SubTitleTag>판매 중인 상품</SubTitleTag>
      <ProductSearch />
      <ButtonTag>
        <Button size="small" text="상품 등록하기" />
      </ButtonTag>
      <ProductOrderBy />
    </ProductControlPanelTag>
  );
}
//z z마음이 꺽일꺼가타..
export default ProductControlPanel;
export const ProductControlPanelTag = styled.div`
  @media screen and (min-width: 1201px) {
    display: flex;
    gap: 12px;
    height: 42px;
    align-items: center;
  }
  @media screen and (min-width: 744px) {
    display: flex;
    gap: 12px;
    height: 42px;
    align-items: center;
  }
  height: 92px;
  position: relative;
  margin: 0 16px;
`;
export const ButtonTag = styled.div`
  @media screen and (min-width: 1201px) {
    position: relative;
  }
  @media screen and (min-width: 744px) {
    position: relative;
  }
  top: 0px;
  right: 0px;
  position: absolute;
`;
export const SubTitleTag = styled.p`
  @media screen and (min-width: 1201px) {
    position: relative;
    flex-grow: 1;
  }
  @media screen and (min-width: 744px) {
    position: relative;
    flex-grow: 1;
  }
  top: 7px;
  left: 0px;
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #111827;
`;
