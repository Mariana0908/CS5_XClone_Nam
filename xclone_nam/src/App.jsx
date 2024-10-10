import { useState } from 'react'
import './App.css'
import { Login } from './login/Login'
import { Logup } from './logup/Logup'
import { Profile } from './views/profile/Profile'


function App() {

  return (
    <>
      {/* <Login />
      <Logup/>  */}
      <Profile/>
    </>
  )
}

export default App
