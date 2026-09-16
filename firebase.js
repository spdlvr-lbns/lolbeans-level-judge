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

ここはあなたのFirebase Consoleにある
実際の設定値を入れてください。
*/

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain:
    "YOUR_PROJECT.firebaseapp.com",

  projectId:
    "YOUR_PROJECT_ID",

  storageBucket:
    "YOUR_PROJECT.firebasestorage.app",

  messagingSenderId:
    "YOUR_MESSAGING_SENDER_ID",

  appId:
    "YOUR_APP_ID"

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
LOGIN
========================================

index.htmlから使用
*/

async function login(
  username,
  password
){

  /*
  LOLBeansのUsernameを
  Firebase Authenticationの
  メールアドレスとして使用

  例:

  username:
  player123

  ↓

  player123@lbns.gg
  */

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

index.htmlから使用
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
USERNAME → EMAIL
========================================
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


  /*
  Firebase用の仮想メールアドレス

  username
  ↓
  username@lbns.gg
  */

  return name + "@lbns.gg";

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
