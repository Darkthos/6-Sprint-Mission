import Header from "@/components/Header";
import TopBanner from "./homeComponents/TopBanner";

function Home() {
  return (
    <div>
      <Header />
      <TopBanner />
      {/* <div
        className={css({
          fontSize: { base: "8px", md: "2xl" },
          fontWeight: "bold",
        })}
      >
        Hello 🐼!
      </div> */}
    </div>
  );
}

export default Home;
