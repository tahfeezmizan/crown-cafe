import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import UseAuth from "../../Hook/UseAuth";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2 1.png";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
    const { singInUser } = UseAuth();
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // console.log("login page location pathname", location.state);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        // console.log(email, password);

        singInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success('User Sing In Sucessfully')
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false)
        } else {
            setDisabled(true)
            alert('Captcha Does Not Match');
        }
    }


    return (
        <div className="h-screen py-20" style={{
            background: `url(${loginBg})`
        }}>
            <Helmet>
                <title>Login - </title>
            </Helmet>
            <div className="w-4/6 mx-auto flex flex-col md:flex-row items-center shadow-2xl" style={{
                background: `url(${loginBg})`
            }}>
                <div className="flex-1">
                    <div className="card shrink-0 w-full max-w-lg p-10 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <p className="">Welcome Back</p>
                            <h1 className="text-5xl font-bold">Log In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered rounded-none"

                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-xs text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative input input-bordered rounded-none flex items-center">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter Your Password"
                                        className="w-4/5"
                                        {...register("password", { required: true })}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-4 flex items-center"
                                    >
                                        {showPassword ? <FaRegEyeSlash className="h-6 w-6 text-gray-500" /> : <FaRegEye className="h-6 w-6 text-gray-500" />}
                                    </button>
                                </div>
                                {errors.password && <span className="text-xs text-red-500">Password is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    < LoadCanvasTemplate />
                                </label>
                                <input
                                    type="text"
                                    name="captch"
                                    onBlur={handleValidateCaptcha}
                                    placeholder="Type above text"
                                    className="input input-bordered rounded-none"
                                />
                            </div>

                            <div className="form-control pt-5">
                                <button disabled={false} className="btn bg-yellow-600 hover:bg-yellow-700  border-none rounded-none text-white text-xl font-bold">Login</button>
                            </div>
                        </form>
                        {/* third party login method */}
                        <div className="text-center">
                            <div className="divider pb-3">or connected with</div>
                        </div>
                        <div className="">
                            <SocialLogin></SocialLogin>
                        </div>

                        <h3 className="text-center pt-5">Need an account? <Link to="/register" className="text-blue-600 hover:text-[#d01818] font-bold">Create Account</Link></h3>
                    </div>
                </div>

                <div className="flex-1">
                    <img className="object-cover object-right" src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;