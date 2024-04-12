import { styled } from "styled-components";
import ProductArr from "./ProductArr";
import SearchBox from "./SearchBox/Searchbox";

function BottomSection() {
  return (
    <div>
      <SearchBox />
      <BottomSectionTag>
        <ProductArr />
        <ProductArr />
      </BottomSectionTag>
    </div>
  );
}

export default BottomSection;
export const BottomSectionTag = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px 0px;
  gap: 32px;
`;
