import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // const { user, singOutUser } = UseAuth();
    // const profileAvater = 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg'
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* {user ? */}
            <>
                <li><NavLink to='/menu'>Our Menu</NavLink></li>
                <li><NavLink to='/bookings'>My Bookings</NavLink></li>
            </>
            {/* : '' */}
        {/* } */}
    </>
 
    return (
        <div className="navMenu fixed left-0 right-0 top-0 z-50 py-2">
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
                <div data-aos="fade-down" data-aos-duration="1300" className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 felx">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end z-[1000]">
                    {/* {user ? */}
                        {/* <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                     <img alt="Tailwind CSS Navbar component" src={user?.photoURL || profileAvater} /> 
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className="text-lg text-center font-bold capitalize mb-3">
                                        {'Name Not Found'}
                                    </p>
                                    <Link to="/profile" className="profileLink text-xl mb-3 flex items-center hover:bg-blue-300"><span className=""></span>Profile</Link>
                                </li>
                                <li>
                                    <button onClick={() => {
                                        singOutUser()
                                    }
                                    } className="logout text-xl mb-3 flex items-center"><span className="">LogOut</button>
                                </li>
                            </ul>
                        </div> : */}

                        <div className="flex gap-4">
                            <NavLink
                                className="btn btn-outline bg-primaryColor font-semibold text-white text-base" to="/login">Login</NavLink>
                        </div>
                </div>
            </div>
            </div>
    );
};

export default Navbar;