import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-white my-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:block md:col-span-7 lg:col-span-8 flex justify-center items-center">
          <img src="../../public/images/sign_up/phones.webp" alt="phone" className="w-4/6" />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 px-8 md:px-5">
          <h2 className="text-3xl font-semibold mb-2 mt-2">Log in to WoowBazar</h2>
          <p className="text-gray-600 font-medium mb-8">Enter your details below</p>
          <form className="space-y-12">
            <div>
              <input type="email" placeholder="Email or Phone Number" className="w-full outline-none border-b-2 border-gray-500 transition-colors duration-300 ease-in-out focus:border-b-red-500  text-lg placeholder:text-lg max-2xl:text-base"/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="w-full outline-none border-b-2 border-gray-500 transition-colors duration-300 ease-in-out focus:border-b-red-500 placeholder:capitalize text-lg placeholder:text-lg max-2xl:text-base"/>
            </div>
            <div className='flex flex-row justify-between w-full'>
              <button className="w-20 bg-red-500 text-white font-semibold py-2.5 rounded-md hover:bg-red-600 transition duration-300">
                Log In
              </button>
              <button className="text-red-500 font-semibold transition duration-300">
                Forget Password
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              If you have not already account?{' '}
              <Link to="/account/register" className="font-bold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

