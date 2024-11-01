// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDgbzHM1W7mgti_H1Pn9qg4OyqUVaSxi4",
  authDomain: "xclone-5975c.firebaseapp.com",
  projectId: "xclone-5975c",
  storageBucket: "xclone-5975c.firebasestorage.app",
  messagingSenderId: "350416528947",
  appId: "1:350416528947:web:5690416aab523d975be546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup };
