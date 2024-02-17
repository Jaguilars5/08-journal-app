// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMaFZntsk_aRVFSOHNex9WCRHs6eir_o",
  authDomain: "react-curso-c2c1e.firebaseapp.com",
  projectId: "react-curso-c2c1e",
  storageBucket: "react-curso-c2c1e.appspot.com",
  messagingSenderId: "387499782508",
  appId: "1:387499782508:web:d8f4b4289e8b4db92fc349",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
