import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import LoginLayout from "../layouts/LoginLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import AddClass from "../pages/Dashboard/AddClass";
import MyClass from "../pages/Dashboard/MyClass";
import ManageClass from "../pages/Dashboard/ManageClass";
import ManageUsers from "../pages/Dashboard/ManageUsers";

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
    // student roues 
    {
      path: "/dashboard/selected-class",
      element: <SelectedClass/>
    },
    {
      path: "/dashboard/enrolled-class",
      element: <EnrolledClass/>
    },
    // Instructor roues 
    {
      path: "/dashboard/add-class",
      element: <AddClass/>
    },
    {
      path: "/dashboard/my-class",
      element: <MyClass/>
    },
    // Admin roues 
    {
      path: "/dashboard/manage-class",
      element: <ManageClass/>
    },
    {
      path: "/dashboard/manage-users",
      element: <ManageUsers/>
    },
  ]
   },
]);

export default router;
