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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            }
        ]
    }
]);

export default router