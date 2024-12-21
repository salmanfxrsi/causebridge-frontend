import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVolunteerPost from "../pages/AllVolunteerPost";
import Error from "../pages/Error";

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
        }
      ]
    },
  ]);

export default router;