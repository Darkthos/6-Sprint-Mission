import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ROUTER_LINKS } from "~/utils/constant";

function HeadNav({ text, link }) {
  return <HeadNavTag to={link}>{text}</HeadNavTag>;
}

export default HeadNav; //a태그에서 link로 바꾸고 프롬에따라 주소 정해주기
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
  color: #4b5563;
`;
