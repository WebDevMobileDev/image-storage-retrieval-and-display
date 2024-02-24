// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBFcNwm06tN7y6aZg28JvX03QmQ4rf2Sag",
	authDomain: "temp-months-proj.firebaseapp.com",
	projectId: "temp-months-proj",
	storageBucket: "temp-months-proj.appspot.com",
	messagingSenderId: "1008913035739",
	appId: "1:1008913035739:web:d12375b89e992770bf77fe"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
