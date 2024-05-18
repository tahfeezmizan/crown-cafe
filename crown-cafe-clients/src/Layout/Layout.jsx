import { Outlet } from "react-router-dom";
import Navbar from "../pages/Sheard/Header/Navbar";
import Footer from "../pages/Sheard/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;