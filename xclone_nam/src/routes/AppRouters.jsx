import { Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";
import { Logup } from "../logup/Logup";
import { HomePage } from "../pages/HomePage";

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logUp" element={<Logup />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
