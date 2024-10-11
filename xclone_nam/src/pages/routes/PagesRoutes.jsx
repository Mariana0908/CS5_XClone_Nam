import { Route, Routes } from "react-router-dom"
import { HomePage } from "../HomePage"
import { MessagesPage } from "../MessagesPage"
import { Profile } from "../../views/profile/Profile"

export const PagesRoutes = () => {
  return (
    
    <>
    <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/notification" element={"page Notifications"}/>
        <Route path="/messages" element={<MessagesPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/user/:userId" element={<Profile/>}/> {/* dynamic route */}

    </Routes>
    </>
  )
}
