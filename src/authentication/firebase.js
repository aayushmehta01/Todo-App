// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl-cYP16tvy4YlMUNgdd4xkVS3StZiGxU",
  authDomain: "todo-authentication-37721.firebaseapp.com",
  projectId: "todo-authentication-37721",
  storageBucket: "todo-authentication-37721.appspot.com",
  messagingSenderId: "594006502553",
  appId: "1:594006502553:web:7fcf8ac752799270391c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;