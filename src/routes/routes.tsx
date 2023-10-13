import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";
import { Networks } from "../pages/Networks";
import { Login } from "../pages/Login";
import { Private } from "./components/Private";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Private> <Admin /> </Private>,
  },
  {
    path: '/networks',
    element: <Networks />,
  },
  {
    path: '/login',
    element: <Login />,
  },

])