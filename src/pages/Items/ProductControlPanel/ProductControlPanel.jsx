import { styled } from "styled-components";
import Button from "~/components/Button";
import ProductOrderBy from "./ProductOrderBy";
import ProductSearch from "./ProductSearch";
import { ROUTER_LINKS } from "~/utils/constant";
import { PC_SIZE, TABLET_SIZE } from "~/utils/themes";

function ProductControlPanel() {
  return (
    <ProductControlPanelTag>
      <SubTitleTag>판매 중인 상품</SubTitleTag>
      <ProductSearch text="검색할 상품을 입력해주세요." />
      <ButtonTag>
        <Button size="small" text="상품 등록하기" link={ROUTER_LINKS.additem} />
      </ButtonTag>
      <ProductOrderBy />
    </ProductControlPanelTag>
  );
}

export default ProductControlPanel;
export const ProductControlPanelTag = styled.div`
  ${PC_SIZE} {
    display: flex;
    gap: 12px;
    height: 42px;
    align-items: center;
  }
  ${TABLET_SIZE} {
    display: flex;
    gap: 12px;
    height: 42px;
    align-items: center;
  }

  height: 92px;
  position: relative;
`;
export const ButtonTag = styled.div`
  ${PC_SIZE} {
    position: relative;
  }
  ${TABLET_SIZE} {
    position: relative;
  }
  top: 0px;
  right: 0px;
  position: absolute;
`;
export const SubTitleTag = styled.h3`
  ${PC_SIZE} {
    position: relative;
    flex-grow: 1;
    top: auto;
    left: auto;
  }
  ${TABLET_SIZE} {
    position: relative;
    flex-grow: 1;
    top: auto;
    left: auto;
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
