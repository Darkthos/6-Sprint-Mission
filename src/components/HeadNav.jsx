import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

function HeadNav({ text, link, isActive }) {
  const location = useLocation();

  return (
    <HeadNavTag to={link} isActive={isActive}>
      {text}
    </HeadNavTag>
  );
}

export default HeadNav;
export const HeadNavTag = styled(Link)`
  @media screen and (min-width: 1201px) {
    width: 109px;
  }
  @media screen and (min-width: 744px) {
    width: 109px;
  }
  padding: 24px 0;
  height: 69px;
  width: none;
  font-size: 16px;
  line-height: 19.09px;
  text-align: center;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#3692FF" : "#4B5563")};
`;
