import { Routes, Route } from "react-router-dom";
import { PagesRoutes } from "../pages/routes/PagesRoutes";

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<PagesRoutes />} />
    </Routes>
  );
};
