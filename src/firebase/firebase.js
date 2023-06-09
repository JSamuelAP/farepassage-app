// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC_9i8-ehDvmRA1oyL3n7xzCkOu2ZZis2I",
	authDomain: "farepassage-app.firebaseapp.com",
	projectId: "farepassage-app",
	storageBucket: "farepassage-app.appspot.com",
	messagingSenderId: "1070316701983",
	appId: "1:1070316701983:web:aab936e5cc84118b57c82a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, auth, db };
