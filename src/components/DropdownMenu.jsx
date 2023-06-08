import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
	const [isVisible, setVisible] = useState(false);
	const [isMounted, setMounted] = useState(false);

	const handleClick = () => {
		setVisible(!isVisible);
	};

	// El menu por defecto es invisible para que no se muestre la animación
	// de contraer al cargar la página.
	// Después de 500ms de haberse montado el componente, se hace visible
	useEffect(function () {
		setTimeout(() => {
			setMounted(true);
		}, 500);
	}, []);

	return (
		<>
			<button onClick={handleClick}>
				<Icon name="options" size="2xl" />
			</button>
			<div
				className={`${
					isVisible ? "animate-expandMenu" : "animate-contractMenu"
				} ${
					isMounted ? "visible" : "invisible"
				} absolute right-8 top-8 bg-white py-2 text-sm text-neutral-600 shadow`}
			>
				<Link to="/" className="block px-4 py-2 hover:bg-primary-50">
					<Icon name="home" />
					<span className="ml-1">Inicio</span>
				</Link>
				<Link to="/settings" className="block px-4 py-2 hover:bg-primary-50">
					<Icon name="settings" />
					<span className="ml-1">Ajustes</span>
				</Link>
				<Link to="/login" className="block px-4 py-2 hover:bg-primary-50">
					<Icon name="logout" />
					<span className="ml-1">Cerrar sesión</span>
				</Link>
			</div>
		</>
	);
};

export default DropdownMenu;
