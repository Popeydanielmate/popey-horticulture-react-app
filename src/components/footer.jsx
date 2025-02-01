import envelopeIcon from "../assets/envelope_icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instaIcon from "../assets/insta-icon.png";

export default function Footer() {
  return (
    <footer>
      <h6>Copyright 2024 Popey's Horticulture. Site made by Daniel Pope</h6>
      <div className="footer-links">
        <a href="mailto:ben@popeyshorticulture.com" className="footer-link">
          <img src={envelopeIcon} alt="Email us" />
          <span>Email</span>
        </a>
        <a
          href="https://www.facebook.com/popeyhorticulture"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src={facebookIcon} alt="Visit our Facebook" />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/popeys.horticulture/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src={instaIcon} alt="Visit our Instagram" />
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
}
