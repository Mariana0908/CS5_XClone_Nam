import { Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";
import { Logup } from "../logup/Logup";
import { HomePage } from "../pages/HomePage";
import { PagesRoutes } from "../pages/routes/PagesRoutes";

export const AppRouters = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/logup" element={<Logup />} />
      <Route path="/*" element={<PagesRoutes/>} />
    </Routes>
  );
};
