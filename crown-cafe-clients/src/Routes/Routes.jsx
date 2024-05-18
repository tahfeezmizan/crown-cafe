import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home"
import Menu from "../pages/Menu/Menu";

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
                path: '/menu',
                element: <Menu></Menu>
            },
        ]
    },
]);

export default router