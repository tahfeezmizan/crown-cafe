import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin";
import UseAuth from "../Hook/UseAuth";

const AdminRoutes = ({children}) => {
    const location = useLocation();
    const { user, loaidng } = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();

    if (loaidng || isAdminLoading) {
        return <span class="loading loading-spinner loading-lg text-secondary py-48"></span>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;