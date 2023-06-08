import PropTypes from "prop-types";

const Input = ({ placeholder, id }) => {
	return (
		<input
			id={id}
			type="number"
			placeholder={placeholder}
			className="w-full rounded bg-white px-2 py-1 text-neutral-600 ring-2 ring-neutral-200 focus:outline-none focus:ring-primary-200"
			min="0"
		/>
	);
};

Input.prototype = {
	placeholder: PropTypes.string,
	id: PropTypes.string,
};

export default Input;
