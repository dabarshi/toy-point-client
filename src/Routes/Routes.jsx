import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/all-toys',
            element: <AllToys></AllToys>
        },
        {
            path: '/my-toys',
            element: <MyToys></MyToys>
        },
        {
            path: '/add-toy',
            element: <AddAToy></AddAToy>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

export default router;