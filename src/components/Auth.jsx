import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  async function signIn() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoggedin(true);
    } catch (error) {
      console.error(error);
      setLoggedin(false);
    }
  }
  async function signInGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoggedin(true);
    } catch (error) {
      console.error(error);
      setLoggedin(false);
    }
  }
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In </button>
      <button onClick={signInGoogle}>Sign In with Google</button>
      <button onClick={logout}>Sign Out</button>
      {loggedin && <h1>Logged In</h1>}
    </>
  );
}

export default Auth;
