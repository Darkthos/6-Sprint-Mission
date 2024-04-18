import { styled } from "styled-components";

function Pagination({ itemsPageNumber, handlePagination, isActive }) {
  return (
    <PaginationTag isActive={isActive} onClick={() => handlePagination(itemsPageNumber)}>
      {itemsPageNumber}
    </PaginationTag>
  );
}

export default Pagination;
export const PaginationTag = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding: 12.5px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#3692FF" : "#FFFFFF")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#6B7280")};
`;
