// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSakntfHr_8YW1WFyma8yuCb7otKgC1A",
  authDomain: "fire-chat-b1203.firebaseapp.com",
  projectId: "fire-chat-b1203",
  storageBucket: "fire-chat-b1203.appspot.com",
  messagingSenderId: "798511415987",
  appId: "1:798511415987:web:ee78a8279dcbb45eb026c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider;
export const db = getFirestore(app);