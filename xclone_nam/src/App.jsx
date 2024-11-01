import "./App.css";
import { NavBar } from "./ui/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routes/AppRouters";
import { Provider } from "./context/Provider";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <AppRouters />
        </Provider>
      </BrowserRouter>
    </>
  );
};
