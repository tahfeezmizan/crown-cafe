import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../Hook/UseAuth';

const SocialLogin = () => {
    const { googleLogin } = UseAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                
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