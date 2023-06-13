import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import logo from "../assets/logos/Icon horizontal.svg";

const Navbar = () => {
	return (
		<nav className=" py-4 shadow-sm">
			<div className="container relative mx-auto flex max-w-xl justify-between px-8">
				<Link to="/">
					<img src={logo} alt="FarePassage App logo" className="h-6" />
				</Link>
				<DropdownMenu />
			</div>
		</nav>
	);
};

export default Navbar;
