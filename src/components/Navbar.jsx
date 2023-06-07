import logo from "../assets/logos/Icon horizontal.svg";
import Icon from "./Icon";

const Navbar = () => {
	return (
		<nav className=" py-4 shadow-sm">
			<div class="container mx-auto flex max-w-xl justify-between px-8">
				<a href="/">
					<img src={logo} alt="FarePassage App logo" className="h-6" />
				</a>
				<Icon name="options" size="2xl" />
			</div>
		</nav>
	);
};

export default Navbar;
