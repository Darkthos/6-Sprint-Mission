import { styled } from "styled-components";

function NavText({ text, color }) {
  return <NavTextTag color={color}>{text}</NavTextTag>;
}

export default NavText;
export const NavTextTag = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: center;
  color: #4b5563;
  width: 109px;
  height: 69px;
  padding: 24px auto 24px;
`;
