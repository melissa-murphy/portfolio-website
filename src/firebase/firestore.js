import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize firebase and firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// send messages without explicit auth
export const authenticateAnonymously = () => {
	return firebase.auth().signInAnonymously();
};

export const createMessage = (contactName, contactEmail, contactMessage) => {
	return db.collection("messages").add({
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		name: contactName,
		email: contactEmail,
		message: contactMessage,
	});
};
