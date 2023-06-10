import { createContext, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import PropTypes from "prop-types";

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
			const docRef = doc(db, "usuarios", user.uid);
			const docSnap = await getDoc(docRef);

			// Si existe, tomarlo
			if (docSnap.exists()) setUser(docSnap.data());
			// Si no existe, crearlo
			else {
				const newUser = {
					userID: user.uid,
					nombre: user.displayName,
					fotoURL: user.photoURL,
					saldo: 0.0,
					tarifa: 5.0,
				};
				setDoc(doc(db, "usuarios", user.uid), newUser);
				setUser(newUser);
			}
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(`Error ${errorCode}: ${errorMessage}`);
		}
	};

	const logout = async () => {
		setUser(null);
		await signOut(auth);
	};

	// Escuchar cambios en los datos del usuario en timpo real
	if (user)
		onSnapshot(doc(db, "usuarios", user.userID), (doc) => setUser(doc.data()));

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
