import React, { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "../firebase/config.js";
import { Context } from "./Context.js";
import { fetchUsers } from "../utils/utilUser.js";

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [post, setPost] = useState(false);

  const login = async () => {
    try {

      const user = await fetchUsers((fetchedUsers) => {
        fetchedUsers.find(us=>us.id === userCredential.user.uid)
      });
        console.log("user", user);
      
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
  setUser({
        userId: userCredential.user.uid,
        img: userCredential.user.photoURL,
        name: userCredential.user.name,
        userName: userCredential.user.email,
        postCount: 0, 
        following: 0,
        followers: 0,
      });

      setLogged(true);
    } catch (error) {

      setLogged(false);
      console.error("Error in login:", error.message);
      throw new Error("Login failed");
    }
  };

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, name);
      setUser({
        uid: userCredential.user.uid,
        email,
        name,
        userName,
      });
      setLogged(true);
    } catch (error) {
      console.error("Error in sign-up:", error.message);
      throw new Error("New User failed");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setLogged(true);
    } catch (error) {
      console.error("Error with Google sign-in:", error.message);
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        userName, 
        setUserName,
        name,
        setName,
        login,
        signUp,
        loginWithGoogle,
        logged,
        setLogged,
        post,
        setPost,
      }}
    >
      {children}
    </Context.Provider>
  );
};
