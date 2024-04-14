import pandaLogoImg from "~assets/icon/panda-log.svg";
import HeadLogo from "../auth/HeadLogo";
import Button from "../auth/Button";
import { HeadNavBox, ItemsHeaderTag } from "../Items/ItemsHeader";
import HeadNav from "../auth/HeadNav";
import { ROUTER_LINKS } from "~/utils/constant";

function Header({ link }) {
  return (
    <ItemsHeaderTag>
      <HeadLogo />
      <HeadNavBox>
        <HeadNav text="자유게시판" />
        <HeadNav text="중고마켓" link={ROUTER_LINKS.items} />
      </HeadNavBox>
      <Button text="로그인" size="" link={ROUTER_LINKS.signin} />
    </ItemsHeaderTag>
  );
}

export default Header;
