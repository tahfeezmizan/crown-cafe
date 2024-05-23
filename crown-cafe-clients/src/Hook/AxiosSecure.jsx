import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const AxiosSecure = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        // console.log('Request Stop By Interceptor', { token });
        return config
    },
        function (error) {
            return Promise.reject(error)
        }
    );

    axiosSecure.interceptors.response.use((response) => {
        return response
    },
        function (error) {
            const status = error?.response?.status;
            console.log('error from interceptors respons', status);
            if (status === 401 || status === 403) {
                logOut(() => { })
                // .then(() => { })
                // .catch(error => console.log(error));
                navigate('/login')
            }
            return Promise.reject(error);
        }
    )
    return axiosSecure
};

export default AxiosSecure;