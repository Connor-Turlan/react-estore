// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
//import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAkiYqSn1Cg4c6O8sNCflaPGGEa8iMmqqU",
	authDomain: "react-estore-e81d0.firebaseapp.com",
	projectId: "react-estore-e81d0",
	storageBucket: "react-estore-e81d0.appspot.com",
	messagingSenderId: "486254966226",
	appId: "1:486254966226:web:cb65d9f6c6ef8626f0440b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
