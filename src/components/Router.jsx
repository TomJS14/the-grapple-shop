/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import ErrorPage from "./ErrorPage.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
