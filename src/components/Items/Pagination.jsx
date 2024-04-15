import { styled } from "styled-components";

function Pagination({ itemsPageNumber, active }) {
  return <PaginationTag color={active}>{itemsPageNumber}</PaginationTag>;
}

export default Pagination;
export const PaginationTag = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding: 12.5px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
`;
