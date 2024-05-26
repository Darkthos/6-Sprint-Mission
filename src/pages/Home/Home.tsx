import { css } from "../../../styled-system/css";

function Home() {
  return (
    <div
      className={css({
        fontSize: { base: "8px", md: "2xl" },
        fontWeight: "bold",
      })}
    >
      Hello 🐼!
    </div>
  );
}

export default Home;
