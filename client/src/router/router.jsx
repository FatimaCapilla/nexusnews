import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import GalleryNews from '../pages/GalleryNews'
import AddNews from '../pages/AddNews'
import News from '../pages/News'
import Register from '../pages/Register'
import LayoutPublic from '../layout/LayoutPublic'
import UpdateNews from '../pages/UpdateNews'
import LayoutPrivate from "../layout/LayoutPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/index",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <GalleryNews />,
          },
          {
            path: "/index/news/:id",
            element: <News />,
          },
          {
            path: "/index/add",
            element: <AddNews />,
          },
          {
            path: "/index/update",
            element: <UpdateNews />,
          }
        ]
      }
    ]
  },

]);

export default router;