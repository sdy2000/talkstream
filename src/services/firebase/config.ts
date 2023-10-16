import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5xxi-wTzeKZ1xD1KAMOlT_4SWmfb6Scg",
  authDomain: "talk-stream.firebaseapp.com",
  projectId: "talk-stream",
  storageBucket: "talk-stream.appspot.com",
  messagingSenderId: "553621315301",
  appId: "1:553621315301:web:fd02a02ccfc15501303e0c",
  measurementId: "G-ZXSMQG38F7",
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firebaseDB = getFirestore(app);

const useRef = collection(firebaseDB, "users");

export {
  firebaseAuth,
  firebaseDB,

  //firestore Ref
  useRef,
};
