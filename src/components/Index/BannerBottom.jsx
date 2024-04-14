import bannerBottomImg from "~assets/banner-bottom.png";

function BannerBottom() {
  return (
    <div className="banner-bottom">
      <span className="sub-title">
        믿을 수 있는
        <br />
        판다마켓 중고 거래
      </span>
      <img src={bannerBottomImg} alt="밑 배너 이미지" />
    </div>
  );
}

export default BannerBottom;
