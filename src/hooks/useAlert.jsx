import { useEffect, useState } from "react";
import Element from "../components/Alert";

const useAlert = () => {
	const [message, setMessage] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		let timeout;

		if (isVisible) {
			timeout = setTimeout(() => {
				setIsVisible(false);
			}, 3000);
		}

		return () => clearTimeout(timeout);
	}, [isVisible]);

	const showAlert = (message) => {
		setMessage(message);
		setIsVisible(true);
	};

	const Alert = () => <Element hidde={!isVisible}>{message}</Element>;

	return [Alert, showAlert];
};

export default useAlert;
