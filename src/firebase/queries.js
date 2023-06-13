import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

const getUsuario = async (uid) => {
	const docRef = doc(db, "usuarios", uid);
	return await getDoc(docRef);
};

const crearUsuario = async (user) => {
	const newUser = {
		userID: user.uid,
		nombre: user.displayName,
		fotoURL: user.photoURL,
		saldo: 0.0,
		tarifa: 5.0,
	};
	await setDoc(doc(db, "usuarios", user.uid), newUser);
};

const descontarPasaje = async (user) => {
	const userRef = doc(db, "usuarios", user.userID);
	await updateDoc(userRef, {
		saldo: increment(-user.tarifa),
	});
};

const recargarPasaje = async (user, recarga) => {
	const userRef = doc(db, "usuarios", user.userID);
	await updateDoc(userRef, {
		saldo: increment(recarga),
	});
};

const actualizarSaldo = async (uid, saldo) => {
	const userRef = doc(db, "usuarios", uid);
	await updateDoc(userRef, { saldo: Number(saldo) });
};

const actualizarTarifa = async (uid, tarifa) => {
	const userRef = doc(db, "usuarios", uid);
	await updateDoc(userRef, { tarifa: Number(tarifa) });
};

export {
	getUsuario,
	crearUsuario,
	descontarPasaje,
	recargarPasaje,
	actualizarSaldo,
	actualizarTarifa,
};
