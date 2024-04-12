import { styled } from "styled-components";
import SubTitle from "~/components/auth/Text/SubTitle";
import Button from "~/components/auth/Button";
import Searchbar from "./Searchbar";
import Sortbar from "./SortBar";

function Searchbox() {
  return (
    <Search>
      <SubTitle text="판매 중인 상품" />
      <Layout>
        <Searchbar text="검색할 상품을 입력해주세요" />
        <Button text="상품 등록하기" size="small" />
        <Sortbar />
      </Layout>
    </Search>
  );
}

export default Searchbox;
export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
