import Header from "~components/Index/Header";
import Banner from "~components/Index/Banner";
import Main from "~components/Index/Main";
import Footer from "~components/Index/Footer";
import BannerBottom from "~components/Index/BannerBottom";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <BannerBottom />
      <Footer />
    </div>
  );
}

export default Home;
