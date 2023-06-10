import PropTypes from "prop-types";

const Input = ({ value, placeholder, id }) => {
	return (
		<input
			id={id}
			type="number"
			value={value}
			placeholder={placeholder}
			className="w-full rounded bg-white px-2 py-1 text-neutral-600 ring-2 ring-neutral-200 focus:outline-none focus:ring-primary-200"
			min="0"
		/>
	);
};

Input.propTypes = {
	value: PropTypes.number,
	placeholder: PropTypes.string,
	id: PropTypes.string,
};

export default Input;
