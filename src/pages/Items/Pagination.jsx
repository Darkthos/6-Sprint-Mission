import { styled } from "styled-components";

function Pagination({ itemsPageNumber, handlePagination, isActive }) {
  return (
    <PaginationTag isActive={isActive} onClick={() => handlePagination(itemsPageNumber)}>
      <PaginationItemTag isActive={isActive}>{itemsPageNumber}</PaginationItemTag>
    </PaginationTag>
  );
}

export default Pagination;
export const PaginationTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#3692FF" : "#FFFFFF")};
`;
export const PaginationItemTag = styled.p`
  font-size: 16px;
  line-height: 19.09px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#6B7280")};
`;
