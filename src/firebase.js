// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4cpoUKJ0a_4uOWZTpGXS0fin1x5g49w4",
  authDomain: "zaimeh.firebaseapp.com",
  projectId: "zaimeh",
  storageBucket: "zaimeh.appspot.com",
  messagingSenderId: "465215646002",
  appId: "1:465215646002:web:59459d84ac354542970f2b",
  measurementId: "G-H5EQ357QHR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, facebookProvider, db };
