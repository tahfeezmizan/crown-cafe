import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import UseAdmin from "../Hook/UseAdmin";

const AdminRoutes = ({ children }) => {
    const { user, loaidng } = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loaidng || isAdminLoading) {
        return <span class="loading loading-spinner loading-lg text-secondary py-48"></span>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;