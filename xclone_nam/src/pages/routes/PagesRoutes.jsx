import { Route, Routes } from "react-router-dom"
import { HomePage } from "../HomePage"
import { MessagesPage } from "../MessagesPage"

export const PagesRoutes = () => {
  return (
    
    <>
    <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/notification" element={"page Notifications"}/>
        <Route path="/messages" element={<MessagesPage/>}/>
        <Route path="/profile" element={"pages profile"}/>
    </Routes>
    </>
  )
}
