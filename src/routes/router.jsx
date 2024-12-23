import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVolunteerPost from "../pages/AllVolunteerPost";
import Error from "../pages/Error";
import Login from "../pages/Authentication/Login";
import PostDetails from "../pages/PostDetails";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/volunteer-posts",
          element: <AllVolunteerPost />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/volunteer-posts/:id",
          element: <PrivateRoutes><PostDetails /></PrivateRoutes>
        }
      ]
    },
  ]);

export default router;