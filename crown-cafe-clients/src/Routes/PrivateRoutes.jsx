import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loaidng } = UseAuth();
    const location = useLocation();
    console.log(location);


    // if (loaidng) {
    //     return <span class="loading loading-spinner loading-lg text-secondary py-48"></span>
    // }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;