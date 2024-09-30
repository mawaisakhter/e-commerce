import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="bg-white my-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-12 md:block md:col-span-7 lg:col-span-8 flex justify-center items-center">
          <img src="../../public/images/sign_up/phones.webp" alt="phone" className="w-4/6" />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 px-8 md:px-5">
          <h2 className="text-3xl font-semibold mb-2 mt-2">Create an account</h2>
          <p className="text-gray-600 font-medium mb-8">Enter your details below</p>
          <form className="space-y-8">
            <div>
              <input type="text" placeholder="Name" className="w-full outline-none border-b-2 border-gray-500 transition-colors duration-300 ease-in-out focus:border-b-red-500 placeholder:capitalize text-lg placeholder:text-lg max-2xl:text-base"
              />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full outline-none border-b-2 border-gray-500 transition-colors duration-300 ease-in-out focus:border-b-red-500 placeholder:capitalize text-lg placeholder:text-lg max-2xl:text-base"/>
            </div>
            <div>
              <input type="tel" placeholder="Phone Number" className="w-full outline-none border-b-2 border-gray-500 transition-colors duration-300 ease-in-out focus:border-b-red-500 placeholder:capitalize text-lg placeholder:text-lg max-2xl:text-base"/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="w-full outline-none border-b-2 border-gray-500 transition-colors duration-300 ease-in-out focus:border-b-red-500 placeholder:capitalize text-lg placeholder:text-lg max-2xl:text-base"/>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <button className="flex justify-center items-center w-full border rounded-md py-2 hover:bg-gray-100 transition duration-300">
              <img src="../../public/google-play.webp" alt="Google Logo" className="w-5 h-5 mr-2" />
              Sign Up With Google
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/account/login" className="text-red-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

