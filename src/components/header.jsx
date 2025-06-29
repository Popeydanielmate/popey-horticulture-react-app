import { useEffect, useState } from "react";
import popeyHortLogo from "../assets/popey_hort_default.jpg";
import envelopeIcon from "../assets/envelope_icon.png";
import phoneIcon from "../assets/phone-icon.webp";
import facebookIcon from "../assets/facebook-icon.png";
import instaIcon from "../assets/insta-icon.png";
import hort_cover_photo from "../assets/hort_cover_photo.jpg"
import hort_cover_photo1 from "../assets/hort_cover_photo1.jpg"
import hort_cover_photo2 from "../assets/hort_cover_photo2.jpg"
import hort_cover_photo3 from "../assets/hort_cover_photo3.jpg"
import hort_cover_photo4 from "../assets/hort_cover_photo4.jpg"
import hort_cover_photo5 from "../assets/hort_cover_photo5.jpg"
import hort_cover_photo6 from "../assets/hort_cover_photo6.jpg"


function Header() {

  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    if (activeStory) {
      const timer = setTimeout(() => {
        setActiveStory(null);
      }, 15000); 
  
      return () => clearTimeout(timer); 
    }
  }, [activeStory]);

  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const handleTouchStart = (e) => {
  setTouchStartY(e.touches[0].clientY);
};

  const handleTouchMove = (e) => {
    setTouchEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStartY !== null && touchEndY !== null) {
      const swipeDistance = touchEndY - touchStartY;
      if (swipeDistance > 50) {
        
        setActiveStory(null);
      }
    }

    
    setTouchStartY(null);
    setTouchEndY(null);
  };


  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "gallery"];

    const handleScroll = () => {
      let current = "home";

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header>
      <nav id="headerNavbar">
      <div className="mobile-top-row">
      <div className="mobile-contact-links">
        <a href="mailto:ben@popeyshorticulture.com" className="mobile-contact-link">
          <img src={envelopeIcon} alt="Email" />
          <span>Email</span>
        </a>
        <a href="tel:0452226521" className="mobile-contact-link">
          <img src={phoneIcon} alt="Phone" />
          <span>Phone</span>
        </a>
        <a href="https://www.facebook.com/popeyhorticulture" className="mobile-contact-link" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/popeys.horticulture/" className="mobile-contact-link" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" />
          <span>Instagram</span>
        </a>
      </div>


        <img src={popeyHortLogo} alt="Popey's Horticulture Logo" class="logo-img" />
      </div>


        <div className="nav-link-wrapper">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#services" className={activeSection === "services" ? "active" : ""}>
          Services
        </a>
        <a href="#gallery" className={activeSection === "gallery" ? "active" : ""}>
          Gallery
        </a>
        </div>

        {/* Start of Stories */}
        <div className="mobile-stories">
        <div
          className="story-thumb"
          onClick={() =>
            setActiveStory({
              src: hort_cover_photo,
              caption: ' Larger Yard Lawn Maintenance 🌿 ',
              timestamp: '17 July 2024'
            })
          }
          >
            <div class="story-inner-ring">
          <img src={hort_cover_photo} alt="Larger Yard Lawn Maintenance" />
          </div>
      </div>

      <div
        className="story-thumb"
        onClick={() =>
          setActiveStory({
            src: hort_cover_photo1,
            caption: '  Topiary Town 🌳  ',
            timestamp: '8 March 2022'
          })
        }
      >
        <div class="story-inner-ring">
        <img src={hort_cover_photo1} alt="Topiary Town" />
        </div>
      </div>

      <div
        className="story-thumb"
        onClick={() =>
          setActiveStory({
            src: hort_cover_photo2,
            caption: ' Lilly Pilly Hedge Trim 🌳🌳🌳 ',
            timestamp: '16 October 2024'
          })
        }
      >
        <div class="story-inner-ring">
        <img src={hort_cover_photo2} alt="Lilly Pilly Hedge Trim" />
        </div>
      </div>

      <div
        className="story-thumb"
        onClick={() =>
          setActiveStory({
            src: hort_cover_photo3,
            caption: ' Spent My Day Hedging Lilly Pillys🌲 ',
            timestamp: '16 October 2024'
          })
        }
      >
        <div class="story-inner-ring">
        <img src={hort_cover_photo3} alt="Spent My Day Hedging Lilly Pillys" />
        </div>
      </div>

      <div
        className="story-thumb"
        onClick={() =>
          setActiveStory({
            src: hort_cover_photo4,
            caption: ' Buxus Hedging 🌳✂️ ',
            timestamp: '16 March 2023'
          })
        }
      >
        <div class="story-inner-ring">
        <img src={hort_cover_photo4} alt="Buxus Hedging" />
        </div>
      </div>

      <div
        className="story-thumb"
        onClick={() =>
          setActiveStory({
            src: hort_cover_photo5,
            caption: ' More Buxus Hedging 🥵 ',
            timestamp: '15 September 2024'
          })
        }
      >
        <div class="story-inner-ring">
        <img src={hort_cover_photo5} alt="More Buxus Hedging" />
        </div>
      </div>

      <div
        className="story-thumb"
        onClick={() =>
          setActiveStory({
            src: hort_cover_photo6,
            caption: ' Topiary Tuesday 🌳🍃 ',
            timestamp: '10 September 2024'
          })
        }
      >
        <div class="story-inner-ring">
        <img src={hort_cover_photo6} alt="Topiary Tuesday" />
        </div>
      </div>

          </div>
      </nav>
    </header>

    {activeStory && (
  <div className="story-modal active"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    <div className="story-timer-bar"></div>
    <span
      className="close-modal"
      onClick={() => setActiveStory(null)}
    >
      &times;
    </span>

    <div className="story-image-wrapper">
      {/* Blurred Background */}
      <div
        className="story-blurred-bg"
        style={{ backgroundImage: `url(${activeStory.src})` }}
      ></div>

      {/* Foreground Image */}
      <img
        className="modal-image"
        src={activeStory.src}
        alt={activeStory.caption}
      />
    </div>

    <div className="modal-caption">"{activeStory.caption}"</div>
    <div className="modal-timestamp">{activeStory.timestamp}</div>
  </div>
)}


    </>

  );
}






export default Header;
