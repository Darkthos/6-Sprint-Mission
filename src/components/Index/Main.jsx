import mainFirstImg from "~assets/main-first-image.png";
import mainSecondImg from "~assets/main-second-image.png";
import mainThirdImg from "~assets/main-third-image.png";

import React from "react";

function Main() {
  return (
    <main className="main">
      <section className="main__section">
        <img src={mainFirstImg} alt="메인 첫번째 이미지" />
        <div className="section-box">
          <span className="section-box__item">Hot item</span>
          <span className="sub-title">
            인기 상품을 <br />
            확인해보세요
          </span>
          <span className="section-box__description">
            가장 HOT한 중고거래 물품을
            <br />
            판다 마켓에서 확인해 보세요
          </span>
        </div>
      </section>
      <section className="main__section">
        <img src={mainSecondImg} alt="메인 두번째 이미지" />
        <div className="section-box">
          <span className="section-box__item">Search</span>
          <span className="sub-title">
            구매를 원하는 <br />
            상품을 검색하세요
          </span>
          <span className="section-box__description">
            구매하고 싶은 물품은 검색해서
            <br />
            쉽게 찾아보세요
          </span>
        </div>
      </section>
      <section className="main__section">
        <img src={mainThirdImg} alt="메인 세번째 이미지" />
        <div className="section-box">
          <span className="section-box__item">Register</span>
          <span className="sub-title">
            판매를 원하는 <br />
            상품을 검색하세요
          </span>
          <span className="section-box__description">
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            판다 마켓에서 확인해 보세요
          </span>
        </div>
      </section>
    </main>
  );
}

export default Main;
