import PropTypes from "prop-types";

const Input = ({ value, placeholder, id, handleChange, error }) => {
	return (
		<>
			<input
				id={id}
				type="number"
				value={value}
				placeholder={placeholder}
				className={`w-full rounded bg-white px-2 py-1  ring-2 focus:outline-none   ${
					error
						? "text-red-500 ring-red-300 focus:ring-red-400"
						: "text-neutral-600 ring-neutral-200 focus:ring-primary-200"
				}`}
				min="0"
				onChange={(e) => handleChange(e.target.value)}
			/>
			{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
		</>
	);
};

Input.propTypes = {
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	placeholder: PropTypes.string,
	id: PropTypes.string,
	handleChange: PropTypes.func,
	error: PropTypes.string,
};

export default Input;
