import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./AxiosSecure";

const UseCarts = () => {
    const { data: cart = [] } = useQuery({
        queryKey: ["cart"],
        queryFn: async() => {
            const res = await axiosSecure.get('/carts')
            return res.data
        }
    })
    return [cart]
};

export default UseCarts;