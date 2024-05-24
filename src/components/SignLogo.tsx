import signPandaImg from "~assets/sign-panda.png";

const SignLogo = () => {
  return (
    <header>
      <a className="sign-banner" href="/" alt="랜딩페이지">
        <img className="sign-banner-img" src={signPandaImg} alt="sign-logo" />
        <h2 className="sign-title font-heading">판다마켓</h2>
      </a>
    </header>
  );
};

export default SignLogo;
