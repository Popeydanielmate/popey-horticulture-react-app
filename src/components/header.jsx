import { NavLink } from "react-router-dom";
import popeyHortLogo from "../assets/popey_hort_default.jpg";

export default function Header() {
  return (
    <header>
      <nav id="headerNavbar">
        <img src={popeyHortLogo} alt="Popey's Horticulture Logo" />
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>About</NavLink>
        <NavLink to={"/"}>Services</NavLink>
        <NavLink to={"/"}>Gallery</NavLink>
      </nav>
    </header>
  );
}
