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
          <h2>We help clients to create the perfect outdoor garden space</h2>
          <p>Welcome to Popey's Horticulture, your trusted local expert in garden care and horticultural services throughout Leeton, Narrandera, and the Murrumbidgee Irrigation Area (MIA). We specialise in creating and maintaining beautiful outdoor spaces, focusing on vibrant gardens, lush lawns, and expertly trimmed hedges. Whether it’s a residential property, commercial or public space, our goal is to bring your vision of a stunning, thriving outdoor environment to life.</p>

          <p>At Popey's Horticulture, we believe that a well-maintained garden is more than just a space—it’s a source of relaxation, inspiration, and pride. Our commitment to quality craftsmanship, attention to detail, and friendly service ensures that every project is tailored to meet the unique needs of our clients. From regular upkeep to one-time transformations, we’re here to help you cultivate a garden that’s as functional as it is beautiful.</p>
        </section>
        
        <section id="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service">
                <h3>Service 1</h3>
                <p>Description of Service 1...</p>
                </div>
                <div className="service">
                <h3>Service 2</h3>
                <p>Description of Service 2...</p>
                </div>
                <div className="service">
                <h3>Service 3</h3>
                <p>Description of Service 3...</p>
                </div>
            </div>
            </section>

        
        <section id="gallery">
          <h2>Gallery</h2>
          <p>Some images of our work...</p>
        </section>
      </div>
    );
}
