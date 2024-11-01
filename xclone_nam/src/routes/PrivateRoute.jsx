import { Routes, Route } from "react-router-dom";
import { PagesRoutes } from "../pages/routes/PagesRoutes";

export const PrivateRoute = ({ userName }) => {
  return (
    <Routes>
      <Route path="/*" element={<PagesRoutes userName={userName} />} />
    </Routes>
  );
};
