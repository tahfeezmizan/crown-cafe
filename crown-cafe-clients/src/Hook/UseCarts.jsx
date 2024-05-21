import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./AxiosSecure";
import UseAuth from "./UseAuth";

const UseCarts = () => {
    const { user } = UseAuth();
    // console.log(user?.email);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default UseCarts;