// src/components/LoginPage.jsx
import React from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/LoginPage.css";

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    alert("Signed in with Google");
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

const handleFacebookLogin = async () => {
  try {
    await signInWithPopup(auth, facebookProvider);
    alert("Signed in with Facebook");
  } catch (error) {
    console.error("Error signing in with Facebook", error);
  }
};

function LoginPage() {
  return (
    <div className="login-page">
      <h2>Sign in to Zaimeh</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      <button onClick={handleFacebookLogin}>Sign in with Facebook</button>
    </div>
  );
}

export default LoginPage;
