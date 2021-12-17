// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHbW1DAoyYRF6oiM-HavIHICipF143VdU",
    authDomain: "placardnarnia.firebaseapp.com",
    projectId: "placardnarnia",
    storageBucket: "placardnarnia.appspot.com",
    messagingSenderId: "441692282908",
    appId: "1:441692282908:web:5252431fdac12b8782bfd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);