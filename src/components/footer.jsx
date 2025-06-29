import envelopeIcon from "../assets/envelope_icon.png";
import phoneIcon from "../assets/phone-icon.webp"; 
import facebookIcon from "../assets/facebook-icon.png";
import instaIcon from "../assets/insta-icon.png";
import popeyHortLogo from "../assets/popey_hort_default.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top-row">
      <img src={popeyHortLogo} alt="Popey's Horticulture Logo" className="footer-logo" />
      <div className="footer-links">
        <a href="mailto:ben@popeyshorticulture.com" className="footer-link">
          <img src={envelopeIcon} alt="Email us" />
          <span>Email</span>
        </a>
        <a href="tel:0452226521" className="footer-link">
          <img src={phoneIcon} alt="Call us" />
          <span>Phone</span>
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
      </div>
      <h6>Copyright 2024 Popey's Horticulture. Site made by Daniel Pope</h6>
    </footer>
  );
}
