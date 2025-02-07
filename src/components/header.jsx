import popeyHortLogo from "../assets/popey_hort_default.jpg";

export default function Header() {
  return (
    <header>
      <nav id="headerNavbar">
        <img src={popeyHortLogo} alt="Popey's Horticulture Logo" />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
      </nav>
    </header>
  );
}
