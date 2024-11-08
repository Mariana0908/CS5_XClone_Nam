import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

// Función para agregar un post
export async function addPost({ body, name, userName, userId }) {
  const docRef = await addDoc(collection(db, "posts"), {
    body: body,
    hourAndDate: new Date(),
    name: name || "",
    userName: userName || "",
    userId: userId,
  });
  return docRef.id; // Este es el ID generado automáticamente.
}

// Función para obtener los posts
export const fetchPosts = async (callback) => {
  try {
    const postsCollection = collection(db, "posts"); // Obtén la colección de posts desde Firestore
    const postsSnapshot = await getDocs(postsCollection); // Obtiene los documentos de la colección
    const fetchedPosts = postsSnapshot.docs.map((doc) => {
      const data = doc.data();
      const date = data.hourAndDate
        ? new Date(data.hourAndDate.seconds * 1000).toLocaleDateString("en-GB") // Convierte la marca de tiempo a una fecha
        : ""; // Si no hay fecha, establece un valor vacío
      return {
        id: doc.id,
        ...data,
        date: date, // Usamos la fecha convertida o vacía
      };
    });

    callback(fetchedPosts); // Llama al callback con los posts obtenidos
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
};

export function formatDateAndTime(dateString) {
  // Crear un objeto Date a partir de la fecha 
  const date = new Date(dateString);

  // Obtener los componentes de la fecha
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Los meses en JavaScript son 0-indexados
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();

  // Obtener los componentes de la hora
  let hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convertir las horas de 24 horas a 12 horas
  hours = hours % 12;
  hours = hours ? hours : 12; // El valor de 0 debe mostrar 12

  // Formatear la fecha y hora
  const formattedDate = `${month}/${day}/${year}, ${hours}:${minutes} ${ampm}`;
  return formattedDate;
}
// Function to order posts from most recent to oldest
export const parseDate = (timestamp) => {
  if (!timestamp) return ""; // Retorna vacío si no hay timestamp

  const date = new Date(timestamp * 1000); // Convertir a milisegundos
  return date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Para formato AM/PM
  });
};
