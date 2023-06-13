import { createContext, useEffect, useState } from "react";
import {
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import PropTypes from "prop-types";
import { auth, db } from "../firebase/firebase";
import { crearUsuario, getUsuario } from "../firebase/queries";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = async () => {
		const provider = new GoogleAuthProvider();

		try {
			// Abrir una ventana para iniciar sesión con Google
			const result = await signInWithPopup(auth, provider);
			const user = result.user;
			// Buscar el documento del usuario autenticado
			const docSnap = await getUsuario(user.uid);
			// Si no existe, crearlo
			if (!docSnap.exists()) await crearUsuario(user);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(`Error ${errorCode}: ${errorMessage}`);
		}
	};

	const logout = async () => await signOut(auth);

	useEffect(() => {
		let unsubscribeDB;
		// Obtener los datos del usuario autentificado
		const getData = async (uid) => setUser((await getUsuario(uid)).data());
		// Escuchar cambios en la autenticación
		const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				getData(currentUser.uid);
				// Escuchar cambios en los datos del usuario en timpo real
				unsubscribeDB = onSnapshot(
					doc(db, "usuarios", currentUser.uid),
					(doc) => setUser(doc.data())
				);
			} else setUser(null);
		});
		// Dejar de escuchar cambios en la autenticación y en los datos
		return () => {
			unsubscribeAuth();
			unsubscribeDB && unsubscribeDB();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { AuthProvider };
export default AuthContext;
