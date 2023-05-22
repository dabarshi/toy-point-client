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
import SingleToy from '../Pages/SingleToy/SingleToy';
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

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
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/add-toy',
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
            path:'/toy/:id',
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
            path: '/update/:id',
            element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>,
        }
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

export default router;