import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../Hook/UseAuth';
import UseAxiosPublic from '../../Hook/UseAxiosPublic';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleLogin } = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(from, { replace: true })
                        toast.success('User Sing In Sucessfully')
                    })
            })
    }

    return (
        <div className='flex items-center justify-center gap-4'>
            <button
                onClick={handleGoogleLogin}
                className='btn btn-sm bg-yellow-500 px-8 text-xl rounded-full'>
                <FaGoogle></FaGoogle>
            </button>

            <button className='btn btn-sm bg-yellow-500 px-8 text-xl rounded-full'>
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;