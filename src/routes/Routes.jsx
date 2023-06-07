import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import LoginLayout from "../layouts/LoginLayout";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  { path: "/dashboard", element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard/selected-class",
      element: <p>SELECTED class</p>
    },
    {
      path: "/dashboard/enrolled-class",
      element: <p>enrolled class</p>
    },

  ]
   },
]);

export default router;
