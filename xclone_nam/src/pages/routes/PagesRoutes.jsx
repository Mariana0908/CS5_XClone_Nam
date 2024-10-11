import { Route, Routes } from "react-router-dom"
import { HomePage } from "../HomePage"
import { MessagesPage } from "../MessagesPage"
import { NavBar } from "../../ui/NavBar"

export const PagesRoutes = () => {
  return (
    
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/notification" element={"page Notifications"}/>
        <Route path="/messages" element={<MessagesPage/>}/>
        <Route path="/profile" element={"pages profile"}/>
    </Routes>
    </>
  )
}
