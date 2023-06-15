import PropTypes from "prop-types";
import Icon from "./Icon";

const Button = ({
	color,
	size,
	fullWidth,
	icon,
	type,
	children,
	disabled,
	handleClick,
}) => {
	const fullWidthClass = fullWidth ? "w-full" : "";
	const colorVariants = {
		primary:
			"bg-primary-400 hover:bg-primary-700 focus:ring-primary-200 disabled:bg-primary-200",
		secondary: "bg-slate-200 hover:bg-slate-300 focus:ring-slate-100",
	};
	const sizeVariants = {
		normal: "rounded px-2 py-1",
		big: "rounded-lg px-4 py-2 text-2xl",
	};

	return (
		<button
			type={type || "button"}
			className={`flex justify-center gap-x-1 align-middle ${
				sizeVariants[size || "normal"]
			} font-bold text-neutral-800 focus:outline-none focus:ring-4 ${
				colorVariants[color || "primary"]
			} ${fullWidthClass} disabled:text-neutral-600`}
			onClick={handleClick}
			disabled={disabled || false}
		>
			{icon && <Icon name={icon} size={size === "big" ? "2xl" : "base"} />}
			{children}
		</button>
	);
};

Button.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary"]),
	size: PropTypes.oneOf(["normal", "big"]),
	fullWidth: PropTypes.bool,
	icon: PropTypes.oneOf(["google", "home", "options", "logout", "settings"]),
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func,
};

export default Button;
