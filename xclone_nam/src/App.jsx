import "./App.css";
import { NavBar } from "./ui/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routes/AppRouters";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRouters/>
      </BrowserRouter>
    </>
  )
}

