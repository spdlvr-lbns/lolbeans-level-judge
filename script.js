import { auth, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const speed = document.getElementById("speed");
const wins = document.getElementById("wins");
const tag = document.getElementById("tag");
const saveBtn = document.getElementById("save");

saveBtn.onclick = async () => {
  const user = auth.currentUser;

  if (!user) {
    alert("Please login first");
    return;
  }

  await setDoc(doc(db, "users", user.uid), {
    username: user.email.replace("@lbns.gg", ""),
    speedrun: Number(speed.value),
    wins: Number(wins.value),
    tag: Number(tag.value)
  });

  alert("Saved!");
};
