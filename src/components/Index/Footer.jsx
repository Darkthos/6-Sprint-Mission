import facebookImg from "~assets/icon/facebook.png";
import twitterImg from "~assets/icon/twitter.png";
import youtubeImg from "~assets/icon/youtube.png";
import instagramImg from "~assets/icon/instagram.png";

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <span className="footer-left__text">@codeit - 2024</span>
        <div className="footer-center">
          <a
            className="footer-center__text"
            href="./privacy.html"
            alt="privacy"
          >
            Privacy Policy
          </a>
          <a className="footer-center__text" href="./faq.html" alt="privacy">
            FAQ
          </a>
        </div>
        <div className="footer-right">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=[/]"
            target="_blank"
          >
            <img src={facebookImg} alt="페이스북" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterImg} alt="트위터" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src={youtubeImg} alt="유튜브" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={instagramImg} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
