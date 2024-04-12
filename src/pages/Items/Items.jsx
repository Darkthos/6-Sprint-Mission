import { styled } from "styled-components";
import Header from "~/components/Items/Header/Header";
import BottomSection from "~/components/Items/Sections/BottomSection/BottomSection";
import Pagenation from "~/components/Items/Sections/Footer/Pagenation";

import TopSection from "~/components/Items/Sections/TopSection/TopSection";

function Items() {
  return (
    <>
      <Header />
      <ItemsTag>
        <TopSection />
        <BottomSection />
        <Pagenation />
      </ItemsTag>
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
