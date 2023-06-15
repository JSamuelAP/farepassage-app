import PropTypes from "prop-types";
import svgGoogle from "../assets/icons/google.svg";
import svgHome from "../assets/icons/home.svg";
import svgLogout from "../assets/icons/logout.svg";
import svgOptions from "../assets/icons/options.svg";
import svgSettings from "../assets/icons/settings.svg";

const Icon = ({ name, size }) => {
	const iconVariants = {
		google: svgGoogle,
		home: svgHome,
		logout: svgLogout,
		options: svgOptions,
		settings: svgSettings,
	};
	const sizeVariants = {
		base: "w-4",
		"2xl": "w-6",
	};

	return (
		<img
			src={iconVariants[name]}
			alt={name + " icon"}
			className={`inline ${sizeVariants[size]}`}
		/>
	);
};

Icon.propTypes = {
	name: PropTypes.oneOf(["google", "home", "logout", "options", "settings"])
		.isRequired,
	size: PropTypes.oneOf(["base", "2xl"]),
};

export default Icon;
