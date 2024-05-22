import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;

    return (
        <div className="flex h-screen">
            <div className="w-80 pt-10 min-h-full bg-yellow-600 text-white">
                <Link className="btn btn-ghost text-xl uppercase Sitelogo">
                    <h2 className="text-3xl">Crown Cafe</h2>
                </Link>

                <ul className="menu space-y-3">
                    {isAdmin ?
                        <>
                            <li><NavLink to="/dashboard/adminhome">
                                <FaHome /> Admin Home
                            </NavLink></li>
                            <li><NavLink to="/dashboard/additems">
                                <FaUtensils /> Add Items
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageitems">
                                <FaList /> Manage Items
                            </NavLink></li>
                            <li><NavLink to="/dashboard/managebookings">
                                <FaBook /> Manage Bookings
                            </NavLink></li>
                            <li><NavLink to="/dashboard/allusers">
                               <FaUsers/> All Users
                            </NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to="/dashboard/userhome">
                                <FaHome /> User Home
                            </NavLink></li>
                            <li><NavLink to="/dashboard/reservation">
                                <FaCalendar /> Reservation
                            </NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory">
                                <FaWallet /> Payment History
                            </NavLink></li>
                            <li><NavLink to="/dashboard/mycart">
                                <FaShoppingCart /> My Cart
                            </NavLink></li>
                            <li><NavLink to="/dashboard/addreview">
                                Add Review
                            </NavLink></li>
                            <li><NavLink to="/dashboard/mybooking">
                                My Booking
                            </NavLink></li>
                        </>
                    }

                    <div className="divider divider-neutral"></div>
                    <li><NavLink to="/">
                        <FaHome /> Home
                    </NavLink></li>
                    <li><NavLink to="/">
                        <IoMenu /> Menu
                    </NavLink></li>
                    <li><NavLink to="/">
                        <FaShoppingBag /> Shop
                    </NavLink></li>
                    <li><NavLink to="/">
                        <FaEnvelope /> Contact
                    </NavLink></li>
                </ul>
            </div>

            <div className="bg-gray-300 flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;