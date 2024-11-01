import { useState } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "../context/Provider";

export const AppRouters = () => {
  const [logged, setLogged] = useState(false);
  console.log(logged);
  return (
    <>
      <Provider>
      {logged ? (
        <PrivateRoute />
      ) : (
        <PublicRoute
          setLogged={setLogged}
        />
      )}
      </Provider>
    </>
  );
};
