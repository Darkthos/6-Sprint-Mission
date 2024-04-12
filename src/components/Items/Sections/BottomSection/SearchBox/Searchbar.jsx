import { styled } from "styled-components";

function Searchbar({ text }) {
  return <SearchInput placeholder={text} />;
}

export default Searchbar;
export const SearchInput = styled.input`
  width: 294px;
  height: 42px;
  text-align: center;
  padding: 9px 76px 9px 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--gray400-color);
  background-color: #f3f4f6;
  border: none;
  border-radius: 12px;
`;
