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
          <div className="story-thumb">
            <img src={hort_cover_photo} alt="Larger Yard Lawn Maintenance" />
          </div>
          <div className="story-thumb">
            <img src={hort_cover_photo1} alt="Topiary Town" />
          </div>
          <div className="story-thumb">
            <img src={hort_cover_photo2} alt="Lilly Pilly Hedge Trim"/> 
          </div>
          <div className="story-thumb">
            <img src={hort_cover_photo3} alt="Spent My Day Hedging Lilly Pillys" /> 
          </div>
          <div className="story-thumb">
            <img src={hort_cover_photo4} alt="Buxus Hedging" /> 
          </div>
          <div className="story-thumb">
            <img src={hort_cover_photo5} alt="More Buxus Hedging" /> 
          </div>
          <div className="story-thumb">
            <img src={hort_cover_photo6} alt="Topiary Tuesday" /> 
          </div>
          </div>
      </nav>
    </header>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo} alt="Larger Yard Lawn Maintenance" />
    <div class="modal-caption">"  Larger Yard Lawn Maintenance 🌿  "</div>
    <div class="modal-timestamp">17 July 2024</div>
    </div>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo1} alt="Topiary Town" />
    <div class="modal-caption">"  Topiary Town 🌳  "</div>
    <div class="modal-timestamp">8 March 2022</div>
    </div>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo2} alt="Lilly Pilly Hedge Trim"/>
    <div class="modal-caption">" Lilly Pilly Hedge Trim 🌳🌳🌳 "</div>
    <div class="modal-timestamp">16 October 2024</div>
    </div>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo3} alt="Spent My Day Hedging Lilly Pillys"/>
    <div class="modal-caption">" Spent My Day Hedging Lilly Pillys 🌲  "</div>
    <div class="modal-timestamp">16 October 2024</div>
    </div>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo4} alt="Buxus Hedging" />
    <div class="modal-caption">" Buxus Hedging 🌳✂️ "</div>
    <div class="modal-timestamp">15 September 2024</div>
    </div>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo5} alt="More Buxus Hedging"  />
    <div class="modal-caption">" More Buxus Hedging 🥵 "</div>
    <div class="modal-timestamp">15 September 2024</div>
    </div>

    <div id="storyModal" class="story-modal">
    <span class="close-modal">&times;</span>
    <img class="modal-image" src={hort_cover_photo6} alt="Topiary Tuesday"  />
    <div class="modal-caption">" Topiary Tuesday 🌳🍃 "</div>
    <div class="modal-timestamp">10 September 2024</div>
    </div>

    </>

  );
}






export default Header;
