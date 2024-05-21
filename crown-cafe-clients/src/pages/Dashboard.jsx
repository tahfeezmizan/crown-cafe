import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-80 pt-10 min-h-full bg-yellow-600 text-white">
                <Link className="btn btn-ghost text-xl uppercase Sitelogo">
                    <h2 className="text-3xl">Crown Cafe</h2>
                </Link>

                <ul className="menu space-y-3">
                    <li><NavLink to="/dashboard/userhome"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/paymenthistory"><FaWallet /> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart/> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/addreview">Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/mybooking">My Booking</NavLink></li>
                    
                    <div className="divider divider-neutral"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>
            </div>

            <div className="bg-gray-300 flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;