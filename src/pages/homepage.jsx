import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import hort_cover_photo1 from "../assets/hort_cover_photo1.jpg";
import hort_cover_photo2 from "../assets/hort_cover_photo2.jpg";
import hort_cover_photo3 from "../assets/hort_cover_photo3.jpg";
import hort_cover_photo4 from "../assets/hort_cover_photo4.jpg";
import hort_cover_photo5 from "../assets/hort_cover_photo5.jpg";
import hort_cover_photo6 from "../assets/hort_cover_photo6.jpg";
import hort_cover_photo7 from "../assets/hort_cover_photo7.jpg";
import hort_cover_photo from "../assets/hort_cover_photo.jpg";
import envelopeIcon from "../assets/envelope_icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instaIcon from "../assets/insta-icon.png";

export default function Homepage() {
    const settings = {
        dots: true,          
        infinite: true,      
        speed: 500,          
        slidesToShow: 1,     
        slidesToScroll: 1,   
        autoplay: true,      
        autoplaySpeed: 3000, 
    };

    return (
      <div>
        <section id="home">
          <h1>Popey's Horticulture - Lawns & Gardens</h1>
          <p>Horticulturist based in Leeton, servicing the MIA region specialising in lawn maintenance & hedging</p>
          
          {/* Social Media Links */}
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

          {/* Image Slideshow */}
          <Slider {...settings}>
              <div>
                  <img src={hort_cover_photo} alt="Main Cover Photo" />
              </div>
              <div>
                  <img src={hort_cover_photo1} alt="Garden Image 1" />
              </div>
              <div>
                  <img src={hort_cover_photo2} alt="Garden Image 2" />
              </div>
              <div>
                  <img src={hort_cover_photo3} alt="Garden Image 3" />
              </div>
              <div>
                  <img src={hort_cover_photo4} alt="Garden Image 4" />
              </div>
              <div>
                  <img src={hort_cover_photo5} alt="Garden Image 5" />
              </div>
              <div>
                  <img src={hort_cover_photo6} alt="Garden Image 6" />
              </div>
              <div>
                  <img src={hort_cover_photo7} alt="Garden Image 7" />
              </div>
          </Slider>
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
