import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import AddClass from "../pages/Dashboard/AddClass";
import MyClass from "../pages/Dashboard/MyClass";
import ManageClass from "../pages/Dashboard/ManageClass";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import Instructor from "../pages/Instructor/Instructor";
import AllClass from "../pages/AllClass/AllClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
    element: <MainLayout />,
    children: [
      {
        path: "/instructors",
        element: (
          <PrivateRoute>
            <Instructor />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-classes",
        element: (
          <PrivateRoute>
            <AllClass />
          </PrivateRoute>
        ),
      },
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // student roues
      {
        path: "/dashboard/selected-class",
        element: <SelectedClass />,
      },
      {
        path: "/dashboard/enrolled-class",
        element: <EnrolledClass />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      // Instructor roues
      {
        path: "/dashboard/add-class",
        element: <InstructorRoute><AddClass /></InstructorRoute>
      },
      {
        path: "/dashboard/my-class",
        element: <InstructorRoute><MyClass /></InstructorRoute>
      },
      // Admin roues
      {
        path: "/dashboard/manage-class",
        element: (
          <AdminRoute>
            <ManageClass />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
