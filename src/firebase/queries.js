import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

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

export { descontarPasaje, recargarPasaje };
