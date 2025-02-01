// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-98645.firebaseapp.com",
  projectId: "mern-auth-98645",
  storageBucket: "mern-auth-98645.appspot.com",
  messagingSenderId: "115864399414",
  appId: "1:115864399414:web:0093becf2c7988df763297"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);