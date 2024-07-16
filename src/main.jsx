import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cover from "./pages/Cover.jsx";
import LoginPage from "./pages/login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import DataRedux from "./pages/DataRedux.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/data",
    element: <Data />,
  },
  {
    path: "/dataredux",
    element: <DataRedux />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
