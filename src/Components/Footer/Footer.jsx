import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 px-4">    
        {/* Woowbazar Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Woowbazar</h2>
          <p>Get 10% off your first order</p>
          <div className="mt-4">
            <input type="email" placeholder="Enter your email" className="w-full py-2 px-3 text-black rounded focus:outline-none"/>
            <button className="mt-2 bg-white text-black px-3 py-1 rounded w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Support</h2>
          <p className='mt-2'>Gulbreg 3 Mall Road Lahore, Pakistan.</p>
          <p className="mt-2">Woowbazar@gmail.com</p>
          <p className='mt-2'>+92 300 1262260</p>
        </div>
        {/* Account Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <ul>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">My Account</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Login / Register</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Cart</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Wishlist</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Shop</Link></li>
          </ul>
        </div>
        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Privacy Policy</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Terms of Use</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">FAQ</Link></li>
            <li className='mt-2'><Link to="#" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
        {/* Download App Section */}
        <div>
          <div className="bg-black text-white  ">
            <h3 className="text-lg font-bold mb-2">Download App</h3>
            <p className="text-sm mb-4">save $3 with App New User Only</p>
            <div className="flex items-center">
              {/* QR Code Image */}
              <img  src="/path/to/qr-code.png"  alt="QR Code"  className="w-16 h-16 mr-4"/>
              <div className="flex flex-col">
                <Link href="#"className="flex items-center border border-white bg-black text-white rounded-md px-4 py-2 mb-2 shadow transition">
                  <img src="../../../public/google-play.webp" alt="Google Play" className="w-4 mr-2" /> Play Store
                </Link>
                <Link href="#" className="flex items-center border border-white bg-black text-white rounded-md px-4 py-2 mb-2 shadow transition">
                  <FaApple className="mr-2" />
                  App Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between px-4">
        {/* Download App Section */}
        {/* <div className="flex items-center mb-6 md:mb-0">
          <div className="bg-black text-white p-6 ">
            <h3 className="text-lg font-bold mb-2">Download App</h3>
            <p className="text-sm mb-4">save $3 with App New User Only</p>
            <div className="flex items-center"> */}
              {/* QR Code Image */}
              {/* <img  src="/path/to/qr-code.png"  alt="QR Code"  className="w-16 h-16 mr-4"/>
              <div className="flex flex-col">
                <Link href="#"className="flex items-center border border-white bg-black text-white rounded-md px-4 py-2 mb-2 shadow transition">
                  <img src="../../../public/google-play.webp" alt="Google Play" className="w-4 mr-2" /> Play Store
                </Link>
                <Link href="#" className="flex items-center border border-white bg-black text-white rounded-md px-4 py-2 mb-2 shadow transition">
                  <FaApple className="mr-2" />
                  App Store
                </Link>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
        {/* Social Icons */}
        <div className="flex mt-4 md:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-8 h-8 flex items-center justify-center">
              <Link to="#">
                <FaFacebookF className='text-xl hover:text-gray-400' />
              </Link>
            </li>
            <li className="w-8 h-8 flex items-center justify-center">
              <Link to="#">
                <FaTwitter className='text-xl hover:text-gray-400' />
              </Link>
            </li>
            <li className="w-8 h-8 flex items-center justify-center">
              <Link to="#">
                <FaInstagram className='text-xl hover:text-gray-400' />
              </Link>
            </li>
            <li className="w-8 h-8 flex items-center justify-center">
              <Link to="#">
                <FaLinkedinIn className='text-xl hover:text-gray-400' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='mt-1' />

      {/* Copyright */}
      <div className="mt-5 text-center">
        <p>&copy; Woowbazar.com 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
