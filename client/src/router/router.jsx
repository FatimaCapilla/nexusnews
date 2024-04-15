import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import GalleryNews from '../pages/GalleryNews'
import AddNews from '../pages/AddNews'
import News from '../pages/News'
import Register from '../pages/Register'
import LayoutPublic from '../layout/LayoutPublic'
import UpdateNews from '../pages/UpdateNews'

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
        path: "/gallery",
        element: <GalleryNews />, 
        }, 
        {
            path: "/add",
            element: <AddNews />, 
        }, 
        {
            path: "/news/:id",
            element: <News />, 
        }, 
        {
            path: "/register",
            element: <Register />, 
        },
        {
            path: "/update",
            element: <UpdateNews />, 
        }
      ]
    },
]);
  
export default router;