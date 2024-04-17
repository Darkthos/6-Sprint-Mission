import Header from "~/components/Home/Header";
import Banner from "~/components/Home/Banner";
import MainSection from "~/components/Home/MainSection";
import Footer from "~/components/Home/Footer";
import BannerBottom from "~/components/Home/BannerBottom";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MainSection />
      <BannerBottom />
      <Footer />
    </div>
  );
}

export default Home;
