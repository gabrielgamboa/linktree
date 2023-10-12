import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtQWlJlXetvGUegYOS1UGFacNBBhVq7tY",
  authDomain: "linktree-30d0b.firebaseapp.com",
  projectId: "linktree-30d0b",
  storageBucket: "linktree-30d0b.appspot.com",
  messagingSenderId: "370235444392",
  appId: "1:370235444392:web:53fbaf39e2b6541493c69d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db}