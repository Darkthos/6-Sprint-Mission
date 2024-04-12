import { styled } from "styled-components";
import sortIcon from "~/assets/icon/sort.png";

function Sortbar() {
  return (
    <Sort>
      <img src={sortIcon} />
    </Sort>
  );
}
export default Sortbar;
export const Sort = styled.a`
  padding: 9px 9px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`;
