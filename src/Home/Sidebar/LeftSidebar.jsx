import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);


  const toggleMenu = (menu) => {
    setOpenMenu(prevMenu => (prevMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Women = [
    { href: '#', text: 'dress' },
    { href: '#', text: 'skirt' },
    { href: '#', text: 'blouse' },
    { href: '#', text: 'pants' },
    { href: '#', text: 'jacket' },
    { href: '#', text: 'coat' },
    { href: '#', text: 'sweater' },
    { href: '#', text: 'top' },
    { href: '#', text: 'jeans' },
    { href: '#', text: 'shorts' },
    { href: '#', text: 'scarf' },
    { href: '#', text: 'sunglasses' },
    { href: '#', text: 'hat' },
    { href: '#', text: 'heels' },
    { href: '#', text: 'flats' },
    { href: '#', text: 'boots' },
    { href: '#', text: 'sandals' },
    { href: '#', text: 'handbag' },
    { href: '#', text: 'clutch' },
    { href: '#', text: 'necklace' }
  ]; 

  const Men = [
    { href: '#', text: 'shirt' },
    { href: '#', text: 't-shirt' },
    { href: '#', text: 'polo' },
    { href: '#', text: 'sweater' },
    { href: '#', text: 'hoodie' },
    { href: '#', text: 'jacket' },
    { href: '#', text: 'coat' },
    { href: '#', text: 'blazer' },
    { href: '#', text: 'pants' },
    { href: '#', text: 'jeans' },
    { href: '#', text: 'shorts' },
    { href: '#', text: 'sweatpants' },
    { href: '#', text: 'suits' },
    { href: '#', text: 'tie' },
    { href: '#', text: 'bowtie' },
    { href: '#', text: 'belt' },
    { href: '#', text: 'socks' },
    { href: '#', text: 'shoes' },
    { href: '#', text: 'sneakers' },
    { href: '#', text: 'loafers' },
    { href: '#', text: 'boots' }
  ];
  
  const links = [
    { href: '#', text: 'Electronics' },
    { href: '#', text: 'Home & Lifestyle' },
    { href: '#', text: 'Medicine' },
    { href: '#', text: 'Sport & Outdoor' },
    { href: '#', text: "Baby's & Toys" },
    { href: '#', text: 'Groceries & Pets' },
    { href: '#', text: 'Health & Beauty' },
  ];

  return (
    <ul className="space-y-2 md:space-y-2">
      <li className="relative">
        <button className="flex flex-row py-2 focus:outline-none md:py-1 text-lg md:text-xl" onClick={() => toggleMenu('menu1')}>
          Women's Fashion
          <span className='ps-4 pt-1.5'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </span>
        </button>
        {openMenu === 'menu1' && (
          <div className={`${isMobile ? 'absolute bottom-0 w-full left-0 bg-white' : 'absolute top-0 left-full'} z-10 mt-2 py-1 pl-2 bg-white border border-gray-200 rounded-md shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full sm:w-[400px] md:w-[570px]`}>
            {Women.map((link, index) => (
              <Link key={index} to={link.href} className="inline px-4 py-2 focus:outline-none text-lg md:text-lg rounded-md text-gray-700 hover:bg-gray-300" onClick={closeMenu}>
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </li>

      <li className="relative">
        <button className="flex flex-row py-2 focus:outline-none md:py-1 text-lg md:text-xl" onClick={() => toggleMenu('menu2')}>
          Men's Fashion
          <span className='ps-11 pt-1.5'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </span>
        </button>
        {openMenu === 'menu2' && (
          <div className={`${isMobile ? 'absolute bottom-0 w-full left-0 bg-white' : 'absolute top-0 left-full'} z-10 mt-2 py-1 pl-2 bg-white border border-gray-200 rounded-md shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full sm:w-[400px] md:w-[570px]`}>
            {Men.map((link, index) => (
              <Link key={index} to={link.href} className="inline px-4 py-2 focus:outline-none text-lg md:text-lg rounded-md hover:bg-gray-300" onClick={closeMenu}>
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </li>

      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href} className="block py-2 focus:outline-none md:py-1 text-lg md:text-xl" onClick={closeMenu}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LeftSidebar;
