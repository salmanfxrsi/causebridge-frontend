import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVolunteerPost from "../pages/AllVolunteerPost";
import Error from "../pages/Error";
import Login from "../pages/Authentication/Login";
import PostDetails from "../pages/PostDetails";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/Authentication/Register";
import Profile from "../pages/Authentication/Profile";
import AddVolunteerNeededPost from "../pages/AddVolunteerNeededPost";
import ManageMyPosts from "../pages/ManageMyPosts";
import UpdateMyPost from "../pages/UpdateMyPost";

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
        path: "/volunteer-need-posts",
        element: <AllVolunteerPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/volunteer-need-posts/:id",
        element: (
          <PrivateRoutes>
            <PostDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-volunteer-needed-post",
        element: (
          <PrivateRoutes>
            <AddVolunteerNeededPost />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-my-posts",
        element: (
          <PrivateRoutes>
            <ManageMyPosts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-my-posts/:id",
        element: (
          <PrivateRoutes>
            <UpdateMyPost />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
