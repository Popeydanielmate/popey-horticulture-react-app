import hort_cover_photo from "../assets/hort_cover_photo.jpg"
import envelopeIcon from "../assets/envelope_icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instaIcon from "../assets/insta-icon.png";

export default function Homepage() {
    return (
      <div>
        <section id="home">
          <h1>Popey's Horticulture - Lawns & Gardens</h1>
          <p>Horticulturist based in Leeton, servicing the MIA region specialising in lawn maintenance & hedging</p>
            <div className="homepage-links">
                <a href="mailto:ben@popeyshorticulture.com" className="homepage-link">
                    <img src={envelopeIcon} alt="Email us" />
                    <span>Email</span>
                </a>
                <a
                    href="https://www.facebook.com/popeyhorticulture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homepage-link"
                >
                    <img src={facebookIcon} alt="Visit our Facebook" />
                    <span>Facebook</span>
                </a>
                <a
                    href="https://www.instagram.com/popeys.horticulture/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homepage-link"
                >
                    <img src={instaIcon} alt="Visit our Instagram" />
                    <span>Instagram</span>
                </a>
                </div>

          <img 
            src={hort_cover_photo} 
            alt="Beautiful garden and lawn maintained by Popey's Horticulture" 
          />
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Details about the business...</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>Description of services offered...</p>
        </section>
        <section id="gallery">
          <h2>Gallery</h2>
          <p>Some images of our work...</p>
        </section>
      </div>
    );
  }
  
  