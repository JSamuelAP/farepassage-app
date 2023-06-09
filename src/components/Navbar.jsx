import logo from "../assets/logos/Icon horizontal.svg";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
	return (
		<nav className=" py-4 shadow-sm">
			<div className="container relative mx-auto flex max-w-xl justify-between px-8">
				<a href="/">
					<img src={logo} alt="FarePassage App logo" className="h-6" />
				</a>
				<DropdownMenu />
			</div>
		</nav>
	);
};

export default Navbar;
