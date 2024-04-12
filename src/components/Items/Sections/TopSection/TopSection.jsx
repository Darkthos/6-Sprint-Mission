import { styled } from "styled-components";
import ProductContainer from "./ProductContainer";
import SubTitle from "~/components/auth/Text/SubTitle";

function TopSection() {
  return (
    <TopSectionBox>
      <SubTitle text="베스트 상품" />
      <>
        <ProductContainer />
      </>
    </TopSectionBox>
  );
}

export default TopSection;
export const TopSectionBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin: 17px 0px 24px 0px;
`;
