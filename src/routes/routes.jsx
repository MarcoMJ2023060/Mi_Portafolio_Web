import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import Proyects from "../pages/proyects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/proyects",
    element: <Proyects />,
  },
]);

function Routes() {
  return <RouterProvider router={routes} />;
}

export default Routes;