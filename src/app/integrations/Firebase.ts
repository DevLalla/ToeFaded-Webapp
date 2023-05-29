// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserSessionPersistence } from "firebase/auth";

export const Firebase = () => {
	// Firebase Config
	const firebaseConfig = {
		apiKey: "AIzaSyCoEiA8BFgHvsFtSAuer0_dO-MP8SkoxUA",
		authDomain: "rnw-template.firebaseapp.com",
		projectId: "rnw-template",
		storageBucket: "rnw-template.appspot.com",
		messagingSenderId: "1080102629494",
		appId: "1:1080102629494:web:bb67d4d32ec5cf9e436f57",
		measurementId: "G-4WFHENJKDC",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	// Firebase Analytics
	const analytics = getAnalytics(app);

	// Firebase Authentication
	const authentication = getAuth(app);
	authentication.useDeviceLanguage();
	authentication.setPersistence(browserSessionPersistence);

	// Firebase Cloud Firestore Config
	const database = getFirestore(app);

	return { analytics, authentication, database };
};
