import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Registar from "../Component/Registar";
import AuthProvider from "../Context/AuthProvider";
import Login from "../Pages/Login";
import JobDetails from "../Component/JobDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import JobApply from "../Pages/JobApply";
import MyApplications from "../Pages/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Route Not Fpound</h1>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Registar',
        element: <Registar></Registar>
      },
      {
        path: 'Login',
        element: <Login></Login>
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
      },
      {
        path: "myApplications",
        element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
      },
      
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
);

export default router