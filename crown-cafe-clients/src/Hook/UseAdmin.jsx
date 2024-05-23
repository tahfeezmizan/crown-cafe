import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import AxiosSecure from "./AxiosSecure";

const UseAdmin = () => {
    const { user } = UseAuth();
    const axiosSecure = AxiosSecure();

    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default UseAdmin;