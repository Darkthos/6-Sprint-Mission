import { styled } from "styled-components";
import HeadLogo from "~/components/auth/HeadLogo";
import HeadNav from "~/components/auth/HeadNav";
import Button from "~/components/auth/Button";

function Header() {
  return (
    <ItemHeader>
      <HeadLogo size="small" />
      <HeadNavBox>
        <HeadNav text="자유게시판" />
        <HeadNav text="중고마켓" color="#3692FF" />
      </HeadNavBox>
      <Button text="로그인" size="small" />
    </ItemHeader>
  );
}

export default Header;
export const ItemHeader = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  gap: 16px;
  align-items: center;
  margin: auto 16px;
  border-bottom: 1px solid #dfdfdf;
`;

export const HeadNavBox = styled.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`;
