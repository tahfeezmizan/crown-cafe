import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Sheard/Header/Navbar";
import Footer from "../pages/Sheard/Footer/Footer";

const Layout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');

    return (
        <div>
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Layout;