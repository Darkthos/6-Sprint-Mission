import { styled } from "styled-components";
import ProductContainer from "./ProductContainer";
import SubTitle from "~/components/auth/Text/SubTitle";
import { GetProductLists } from "~/apis/productsApi";
const LoadBestProducts = async (options) => {
  try {
    const response = await GetProductLists({ ...options, orderBy: "favorite" });
    // 성공적으로 데이터를 불러왔을 때의 처리
    console.log(response); // 예시: 받은 데이터를 콘솔에 출력
  } catch (error) {
    // 오류가 발생했을 때의 처리
    console.error("상품을 불러오는 동안 오류가 발생했습니다:", error.message);
  }
};

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
