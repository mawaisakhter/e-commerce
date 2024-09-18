import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setIsMenuOpen(!isMenuOpen);
    setActiveLink(link);
  };

  return (
    <nav className="bg-white w-full z-20 border-b border-gray-200">
      <div className='bg-black text-white text-center md:font-medium font-normal px-2 md:px-0 py-3'>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="/" className='underline'>Shop Now</Link>
        </p>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-2">
        <Link to="" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">WoowBazar</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <div className="flex items-center gap-6 max-3xl:gap-5">
            <div className="hidden md:flex items-center bg-[#F5F5F5] px-6 py-2 gap-4">
              <input type="text" placeholder="What are you looking for?" className="text-sm placeholder:text-color-text-2 bg-transparent outline-none max-2xl:text-xs" />
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 cursor-pointer max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <Link to="#" className="relative cursor-pointer">
              <p className="text-sm text-white bg-red-600 rounded-full absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center max-3xl:w-5 max-3xl:h-5 max-3xl:-top-2 max-3xl:-right-2 max-2xl:text-[10px] max-2xl:h-4 max-2xl:w-4 max-2xl:-right-[6px]">2</p>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-8 h-8 max-3xl:w-7 max-3xl:h-7 max-2xl:w-6 max-2xl:h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path></svg>
            </Link>
            <Link to="#" className="relative cursor-pointer">
              <p className="text-sm text-white bg-red-600 rounded-full absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center max-3xl:w-5 max-3xl:h-5 max-3xl:-top-2 max-3xl:-right-2 max-2xl:text-[10px] max-2xl:h-4 max-2xl:w-4 max-2xl:-right-[6px]">4</p>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"></path>
              </svg>
            </Link>
            <Link to="#">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 max-3xl:w-6 max-3xl:h-6 max-2xl:w-5 max-2xl:h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={handleToggle}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center md:ps-44 justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to="/" className={`block py-2 px-3 ${activeLink === 'home' ? 'underline' : ''} rounded md:bg-transparent md:p-0`} onClick={() => handleLinkClick('home')}>Home</Link>
            </li>
            <li>
              <Link to="/contact" className={`block py-2 px-3 ${activeLink === 'Contact' ? 'underline' : ''} rounded md:bg-transparent md:p-0`} onClick={() => handleLinkClick('Contact')}>Contact</Link>
            </li>
            <li>
              <Link to="/about" className={`block py-2 px-3 ${activeLink === 'About' ? 'underline' : ''} rounded md:bg-transparent md:p-0`} onClick={() => handleLinkClick('About')}>About</Link>
            </li>
            <li>
              <Link to="/account/register" className={`block py-2 px-3 ${activeLink === 'Sign' ? 'underline' : ''} rounded md:bg-transparent md:p-0`} onClick={() => handleLinkClick('Sign')}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
