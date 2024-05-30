// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const useMenu = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: menu = [], isPending: isLoading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })


    return [menu, isLoading, refetch]
};

export default useMenu;