import React, { useState } from "react";
import { context } from "./Context";

// Create a wrapper (envoltura) que va a contener nuestros estados
export const Provider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPost] = useState("");
  

  return (
    <context.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        post,
        setPost
      }}
    >
      {/* nos sirve para mostrar cualquier componente que queramos enviar aquí */}
      {children}
    </context.Provider>
  );
};
