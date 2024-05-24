import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NetFlex from "../pages/Sheard/NetFlex";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'netflix',
                element: <PrivateRoutes>
                    <NetFlex></NetFlex>
                </PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // normal user routes 
            {
                path: 'cart',
                element: <Cart></Cart>
            },


            // admin panel routes
            {
                path: 'additem',
                element: <AdminRoutes>
                    <AddItem />
                </AdminRoutes>
            },
            {
                path: 'allusers',
                element: <AdminRoutes>
                    <AllUsers />
                </AdminRoutes>
            }
        ]
    }
]);

export default router