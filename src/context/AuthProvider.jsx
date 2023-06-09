import { createContext, useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = async () => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await signInWithPopup(auth, provider);
			setUser(result.user);
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
