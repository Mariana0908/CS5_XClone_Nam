import { useState } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouters = () => {
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  console.log(logged);
  return (
    <>
      {logged ? (
        <PrivateRoute userName={userName} />
      ) : (
        <PublicRoute
          setLogged={setLogged}
          userName={userName}
          setUserName={setUserName}
        />
      )}
    </>
  );
};
