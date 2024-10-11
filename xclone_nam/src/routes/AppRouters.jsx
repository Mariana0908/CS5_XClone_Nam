import { Route, Routes } from "react-router-dom";
import { Login } from "../login/Login";

import { useState } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouters = () => {
  const [logged, setLogged] = useState(false);
   console.log(logged)
  return (
    <>
     {logged
     ? 
     <PrivateRoute />
     :
     <PublicRoute setLogged={setLogged} />}
     </>
  );
}
;
