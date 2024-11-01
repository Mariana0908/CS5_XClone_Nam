import React, { useState } from 'react'
import { context } from './Context'

// Creando un wrapper (envoltura) que va a contener nuestros estados
export const Provider = ({children}) => {
    const [user, setUser] = useState("Mariana");


  return (
    <context.Provider
    value={{
      user,
      setUser
    }}>
        {children}
    </context.Provider>
  )
}