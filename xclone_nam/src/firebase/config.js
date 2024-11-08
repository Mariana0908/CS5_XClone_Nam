// Importa solo las funciones necesarias del SDK modular
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore desde el SDK modular
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDgbzHM1W7mgti_H1Pn9qg4OyqUVaSxi4",
  authDomain: "xclone-5975c.firebaseapp.com",
  projectId: "xclone-5975c",
  storageBucket: "xclone-5975c.firebasestorage.app",
  messagingSenderId: "350416528947",
  appId: "1:350416528947:web:5690416aab523d975be546"
};

// Inicializa Firebase y los servicios
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // Inicializa Firestore con el SDK modular

// Exporta los servicios para usarlos en tu aplicación
export { auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, db };
