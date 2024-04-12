import bannerImg from "~assets/banner.png";
import { Link } from "react-router-dom";
import { ROUTER_LINKS } from "~/utils/constant";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__box">
        <span className="sub-title--lettering-none">
          일상의 모든 물건을
          <br />
          거래해 보세요
        </span>
        <Link to={ROUTER_LINKS.items} className="banner-button">
          구경하러 가기
        </Link>
      </div>
      <div className="banner-image">
        <img src={bannerImg} alt="배너 이미지" />
      </div>
    </div>
  );
}

export default Banner;
