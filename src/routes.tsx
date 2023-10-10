import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Networks } from "./pages/Networks";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Admin />,
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