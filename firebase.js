// Firebase v12
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8xXDmr0TYuIwgg7bVPe1Xoegi3Dkd6Ag",
  authDomain: "lolbeans-level-judge.firebaseapp.com",
  projectId: "lolbeans-level-judge",
  storageBucket: "lolbeans-level-judge.firebasestorage.app",
  messagingSenderId: "27831466916",
  appId: "1:27831466916:web:f92e4c417f42fa089e5f31"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Username → Email変換
function usernameToEmail(username){
  return username.toLowerCase() + "@lbns.gg";
}

export async function register(username,password){
  return createUserWithEmailAndPassword(
    auth,
    usernameToEmail(username),
    password
  );
}

export async function login(username,password){
  return signInWithEmailAndPassword(
    auth,
    usernameToEmail(username),
    password
  );
}

export async function logout(){
  return signOut(auth);
}
