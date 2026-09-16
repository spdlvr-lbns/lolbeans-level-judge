import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  getFirestore
} from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
  getStorage
} from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyA8xXDmr0TYuIwgg7bVPe1Xoegi3Dkd6Ag",
  authDomain: "lolbeans-level-judge.firebaseapp.com",
  projectId: "lolbeans-level-judge",
  storageBucket: "lolbeans-level-judge.firebasestorage.app",
  messagingSenderId: "27831466916",
  appId: "1:27831466916:web:f92e4c417f42fa089e5f31"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});


async function loginWithGoogle() {

  // 以前の test123@lbns.gg などをログアウト
  if (auth.currentUser) {
    await signOut(auth);
  }

  // Googleアカウントでログイン
  return await signInWithPopup(auth, googleProvider);
}

async function logout() {
  return await signOut(auth);
}


export {
  auth,
  db,
  storage,
  loginWithGoogle,
  logout
};
