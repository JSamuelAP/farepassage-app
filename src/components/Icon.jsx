import PropTypes from "prop-types";
import svgGoogle from "../assets/icons/google.svg";
import svgHome from "../assets/icons/home.svg";
import svgLogout from "../assets/icons/logout.svg";
import svgOptions from "../assets/icons/options.svg";
import svgSettings from "../assets/icons/settings.svg";

const Icon = ({ name, size }) => {
	let svgSource;
	let width;

	switch (name) {
		case "google":
			svgSource = svgGoogle;
			break;
		case "home":
			svgSource = svgHome;
			break;
		case "logout":
			svgSource = svgLogout;
			break;
		case "options":
			svgSource = svgOptions;
			break;
		case "settings":
			svgSource = svgSettings;
			break;
		default:
			svgSource = svgHome;
			break;
	}

	switch (size) {
		case "base":
			width = "w-4";
			break;
		case "2xl":
			width = "w-6";
			break;
		default:
			width = "w-4";
			break;
	}

	return <img src={svgSource} alt={name} className={width} />;
};

Icon.propTypes = {
	name: PropTypes.oneOf(["google", "home", "logout", "options", "settings"])
		.isRequired,
	size: PropTypes.oneOf(["base", "2xl"]),
};

export default Icon;
