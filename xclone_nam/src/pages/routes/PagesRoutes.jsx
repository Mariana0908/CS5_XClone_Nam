import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage";
import { MessagesPage } from "../MessagesPage";
import { Profile } from "../../views/profile/MyProfile";
import { NavBar } from "../../ui/NavBar";

export const PagesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/notification" element={"page Notifications"} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:userId" element={<Profile />} />{" "}
        {/* dynamic route */}
      </Routes>
    </>
  );
};
