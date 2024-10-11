
import { Routes , Route} from "react-router-dom"
import {Login} from "../login/Login"
import {Logup} from "../logup/Logup"

export const PublicRoute = ({setLogged}) => {
  return (
    <Routes>
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/logup" element={<Logup />} />
    </Routes>
  )
}