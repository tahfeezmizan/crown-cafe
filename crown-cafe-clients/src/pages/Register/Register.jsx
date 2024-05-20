// Register.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2 1.png";
import UseAuth from "../../Hook/UseAuth";

const Register = () => {
    const { createUser, updateUserProfile } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, photoUrl, email, password } = data;
        console.log(data);

        createUser(email, password)
            .then(result => {
                const signUpUser = result.user;
                console.log(signUpUser);
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        alert('User Profile Update');
                        reset();
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                // console.error("Error creating user:", error);
            });
    }

    return (
        <div className="h-screen py-20" style={{ background: `url(${loginBg})` }}>
            <Helmet>
                <title>Register - Crown Cafe</title>
            </Helmet>
            <div className="w-4/6 mx-auto flex flex-col md:flex-row items-center shadow-2xl" style={{ background: `url(${loginBg})` }}>
                <div className="flex-1">
                    <div className="card shrink-0 w-full max-w-lg p-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <p className="">Welcome!</p>
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered rounded-none"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo Url</span>
                                </label>
                                <input
                                    type="photoUrl"
                                    name="photoUrl"
                                    placeholder="Enter Your Photo Url"
                                    className="input input-bordered rounded-none"
                                    {...register("photoUrl", { required: "Photo Url is required" })}
                                />
                                {errors.photoUrl && <span className="text-xs text-red-500">{errors.photoUrl.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered rounded-none"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Entered value does not match email format"
                                        }
                                    })}
                                />
                                {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
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
                                        {...register("password", { required: "Password is required" })}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-4 flex items-center"
                                    >
                                        {showPassword ? <FaRegEyeSlash className="h-6 w-6 text-gray-500" /> : <FaRegEye className="h-6 w-6 text-gray-500" />}
                                    </button>
                                </div>
                                {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
                            </div>

                            <div className="form-control pt-5">
                                <input type="submit" value="Sign Up" className="btn bg-yellow-600 hover:bg-yellow-700 border-none rounded-none text-white text-xl font-bold" />
                            </div>
                        </form>
                        <div className="text-center">
                            <div className="divider pb-3">or connect with</div>
                        </div>
                        <h3 className="text-center pt-5">Have an account? <Link to="/login" className="text-blue-600 hover:text-[#d01818] font-bold">Log In</Link></h3>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="object-cover object-right" src={loginImg} alt="Login Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Register;
