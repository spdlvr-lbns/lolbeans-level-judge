import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
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


/*
========================================
FIREBASE CONFIG
========================================
*/

const firebaseConfig = {

  apiKey:
    "AIzaSyA8xXDmr0TYuIwgg7bVPe1Xoegi3Dkd6Ag",

  authDomain:
    "lolbeans-level-judge.firebaseapp.com",

  projectId:
    "lolbeans-level-judge",

  storageBucket:
    "lolbeans-level-judge.firebasestorage.app",

  messagingSenderId:
    "27831466916",

  appId:
    "1:27831466916:web:f92e4c417f42fa089e5f31"

};


/*
========================================
INITIALIZE FIREBASE
========================================
*/

const app =
  initializeApp(firebaseConfig);


/*
========================================
AUTH
========================================
*/

const auth =
  getAuth(app);


/*
========================================
FIRESTORE
========================================
*/

const db =
  getFirestore(app);


/*
========================================
STORAGE
========================================
*/

const storage =
  getStorage(app);


/*
========================================
CONVERT USERNAME TO EMAIL
========================================

例:

Ryusei
↓
ryusei@lbns.gg

Firebase Authenticationでは
このメールアドレスを使用します。
*/

function convertUsernameToEmail(
  username
){

  const name =
    String(username)
      .trim()
      .toLowerCase();


  if(!name){

    throw new Error(
      "Please enter a username."
    );

  }


  return name + "@lbns.gg";

}


/*
========================================
LOGIN
========================================
*/

async function login(
  username,
  password
){

  const email =
    convertUsernameToEmail(
      username
    );


  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

}


/*
========================================
REGISTER
========================================
*/

async function register(
  username,
  password
){

  const email =
    convertUsernameToEmail(
      username
    );


  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

}


/*
========================================
EXPORT
========================================
*/

export {
  auth,
  db,
  storage,
  login,
  register
};
