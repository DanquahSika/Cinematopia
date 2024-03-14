import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const LoginForm = () => {
    return (
      <div className="login-form h-[70h] w-full">
        <div className="flex flex-col items-center justify-center min-h-full min-w-full">
          <div className="w-full max-w-md bg-[#222] rounded-xl shadow-md py-16 px-8">
            <h2 className="text-[28px] font-bold text-white  mb-6 ">Log In</h2>
            <div className="flex space-x-2 m-4 items-center justify-center">
              <div className="social-links">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="social-links">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social-links">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <form className="flex flex-col">
              <input
                placeholder="Email"
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="email"
              />
              <input
                placeholder="Password"
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="password"
              />
              <Link to="/home" className="link">
                <button className="bg-gradient-to-r from-yellow-100 to-yellow-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-100 hover:to-yellow-600 duration ease-in duration-200">
                  Submit
                </button>
              </Link>
              <p className="text-white mt-4 text-center">
                Don't have an account yet?
                <a
                  className="text-white-500 hover:underline mt-4 px-1 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md bg-[#222] rounded-xl shadow-md py-8 px-8">
            <h2 className="text-[25px] font-bold text-white  mb-6 ">Sign Up</h2>
            <form className="flex flex-col">
              <div className="flex space-x-4 mb-4">
                <input
                  placeholder="First Name"
                  className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                  type="text"
                />
                <input
                  placeholder="Last Name"
                  className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                  type="text"
                />
              </div>
              <input
                placeholder="Email"
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="email"
              />
              <input
                placeholder=" Confirm Email"
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="email"
              />
              <input
                placeholder="Password"
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="password"
              />
              <input
                placeholder="Confirm Password"
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"
                type="password"
              />
              <button className="bg-gradient-to-r from-yellow-100 to-yellow-500 text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-100 hover:to-yellow-600 duration ease-in duration-200">
                Submit
              </button>
              <p className="text-white mt-4 text-center">
                Already have an account?
                <a
                  className="text-white-500 hover:underline mt-4 px-1 ursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Log In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" hero bg-212321-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-ea8f11-500 font-bold">CINEMATOPIA</p>
          <p className="font-medium text-lg leading-1 text-orange-100">
            Cinematopia - Your Gateway to Streaming Excellence
          </p>
        </div>
        <div className="flex-1">{isLogin ? <LoginForm /> : <SignUpForm />}</div>
      </main>
    </div>
  );
};

export default Login;
