// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAjLdf11wyoi9hIpCwVJ12-M13_qXNE5A",
  authDomain: "glamping-58472.firebaseapp.com",
  projectId: "glamping-58472",
  storageBucket: "glamping-58472.appspot.com",
  messagingSenderId: "221416607793",
  appId: "1:221416607793:web:7a6f33465725f333eec510",
  measurementId: "G-EFFPWGRSKF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)