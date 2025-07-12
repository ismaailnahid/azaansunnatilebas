// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9oDupW2atBfT_Y2TylOjm3dKhG1PpkJY",
  authDomain: "azaansunatilebas.firebaseapp.com",
  projectId: "azaansunatilebas",
  storageBucket: "azaansunatilebas.appspot.com",
  messagingSenderId: "854978097747",
  appId: "1:854978097747:web:3ae3d004d5df2568858ca6",
  measurementId: "G-WF027GFB8B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut, db, collection, addDoc, deleteDoc, doc, getDocs };
