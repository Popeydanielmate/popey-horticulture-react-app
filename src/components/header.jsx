import { useEffect, useState } from "react";
import popeyHortLogo from "../assets/popey_hort_default.jpg";

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
    <header>
      <nav id="headerNavbar">
        <img src={popeyHortLogo} alt="Popey's Horticulture Logo" />
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
      </nav>
    </header>
  );
}

export default Header;
