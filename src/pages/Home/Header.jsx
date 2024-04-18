import pandaLogoImg from "~assets/icon/panda-log.svg";
import HeadLogo from "../../components/HeadLogo";
import Button from "../../components/Button";
import { HeadNavBox, HeaderTag, NavBorderLine, NavStickTag } from "../Items/ItemsHeader";
import HeadNav from "../../components/HeadNav";
import { ROUTER_LINKS } from "~/utils/constant";

function Header({ link }) {
  return (
    <NavStickTag>
      <HeaderTag>
        <HeadLogo />
        <HeadNavBox>
          <HeadNav text="자유게시판" />
          <HeadNav text="중고마켓" link={ROUTER_LINKS.items} />
        </HeadNavBox>
        <Button text="로그인" size="" link={ROUTER_LINKS.signin} />
      </HeaderTag>

      <NavBorderLine></NavBorderLine>
    </NavStickTag>
  );
}

export default Header;
