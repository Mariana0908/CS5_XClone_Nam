import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

// Función para agregar un post
export async function addUser({ name, userName, email, password, listOfFollowers, listOfFollowing }) {
  const docRef = await addDoc(collection(db, "users"), {
    name: name,
    userName: userName,
    email: email,
    password: password,
    listOfFollowers: listOfFollowers,
    listOfFollowing: listOfFollowing,
  });
  return docRef.id; // Este es el ID generado automáticamente.
}

// Función para obtener los posts
export const fetchUsers = async (callback) => {
  try {
    const usersCollection = collection(db, "users"); // Obtén la colección de users desde Firestore
    const usersSnapshot = await getDocs(usersCollection); // Obtiene los documentos de la colección
    const fetchedUsers = usersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      };
    });

    callback(fetchedUsers); // Llama al callback con los posts obtenidos
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
};