import { Firebase } from "../../integrations/Firebase";
import { userStore } from "../../stores/User";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signOut,
} from "firebase/auth";

interface getDocumentsProps {
	documentId?: string;
	collectionName?: string;
}

export const useAuthentication = () => {
	const { authentication } = Firebase();
	const provider = new GoogleAuthProvider();
	const updateUser = userStore((state) => state.updateUser);

	onAuthStateChanged(authentication, (user) => {
		if (user) {
			console.log("User has signed in successfully");
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			updateUser({
				info: { user },
				authenticated: true,
			});
			// ...
		} else {
			console.log("User is not signed in");
			// User is signed out
			// ...
			updateUser({
				info: {},
				authenticated: false,
			});
		}
	});

	const createStandardUser = (email, password) => {
		console.log("Standard Registration In-Progress");
		createUserWithEmailAndPassword(authentication, email, password);
	};

	const standardSignIn = (email, password) => {
		console.log("Standard Sign In In-Progress");
		signInWithEmailAndPassword(authentication, email, password);
	};

	const googleSignIn = () => {
		console.log("Google Sign In In-Progress");
		signInWithRedirect(authentication, provider);
	};

	const userSignOut = () => {
		console.log("Logout In-Progress");
		signOut(authentication);
	};

	return { provider, createStandardUser, standardSignIn, googleSignIn, userSignOut };
};
