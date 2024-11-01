import { useContext, useState } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "../context/Provider";
import { Context } from "../context/Context";

export const AppRouters = () => {
  const {logged, setLogged} = useContext(Context);
  return (
    <>
      {logged ? (
        <PrivateRoute />
      ) : (
        <PublicRoute
          setLogged={setLogged}
        />
      )}
    </>
  );
};
