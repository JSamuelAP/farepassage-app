import PropTypes from "prop-types";

const Alert = ({ hidde, children }) => {
	return (
		<div className={`${hidde && "hidden"} rounded-lg bg-green-100 p-4`}>
			<p className="text-center text-sm text-green-800">{children}</p>
		</div>
	);
};

Alert.propTypes = {
	hidde: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default Alert;
