import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { data } from "../mocks/newUsers";

export const addDocuments = async () => {
    try {
        const usersCollectionRef = collection(db, "users");

        for (const user of data) {
            const userDocRef = doc(usersCollectionRef, user.id);
            await setDoc(userDocRef, user);
            console.log(`Added user with ID: ${user.id}`);
        }

        console.log("All documents added successfully.");
    } catch (error) {
        console.error("Error adding documents: ", error);
    }
};
