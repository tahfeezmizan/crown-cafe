import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hook/UseAuth";

const Navbar = () => {
    const { user, logOut } = UseAuth();

    const handleLogout = () => {
        logOut(() => { })
            // .then(() => { })
            // .catch(error => console.log(error));
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order'>Our Shop</NavLink></li>

        {user ? <>
            <button onClick={handleLogout} className="font-semibold text-white text-base">Sing Out</button>
        </> :
            <>
                <li><NavLink to="/login">Sing In</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navMenu fixed left-0 right-0 top-0 z-50 py-2 backdrop-blur-sm">
            <div className="container mx-auto navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl uppercase Sitelogo">
                        {/* <img src={logo} className="w-20 h-auto" alt="" /> */}
                        <h2 className="text-3xl">Crown Cafe</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal items-center px-1 gap-5 felx">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;