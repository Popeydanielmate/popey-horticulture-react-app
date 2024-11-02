import { NavLink } from "react-router-dom";
export default function Header(){
	return(
		<header>
			<div id="headerBranding">
				Popey's Horticulture
			</div>
			<nav id="headerNavbar">
				<NavLink to={"/"} >Home</NavLink>
				<NavLink to={"/collection"} ></NavLink>
				
			</nav>
		</header>
	)
}