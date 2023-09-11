import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5xxi-wTzeKZ1xD1KAMOlT_4SWmfb6Scg",
  authDomain: "talk-stream.firebaseapp.com",
  projectId: "talk-stream",
  storageBucket: "talk-stream.appspot.com",
  messagingSenderId: "553621315301",
  appId: "1:553621315301:web:fd02a02ccfc15501303e0c",
  measurementId: "G-ZXSMQG38F7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
