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
    { href: 'category/women/dress', text: 'dress' },
    { href: 'category/women/skirt', text: 'skirt' },
    { href: 'category/women/blouse', text: 'blouse' },
    { href: 'category/women/pants', text: 'pants' },
    { href: 'category/women/jacket', text: 'jacket' },
    { href: 'category/women/coat', text: 'coat' },
    { href: 'category/women/sweater', text: 'sweater' },
    { href: 'category/women/top', text: 'top' },
    { href: 'category/women/jeans', text: 'jeans' },
    { href: 'category/women/shorts', text: 'shorts' },
    { href: 'category/women/scarf', text: 'scarf' },
    { href: 'category/women/sunglasses', text: 'sunglasses' },
    { href: 'category/women/hat', text: 'hat' },
    { href: 'category/women/heel', text: 'heels' },
    { href: 'category/women/flats', text: 'flats' },
    { href: 'category/women/boots', text: 'boots' },
    { href: 'category/women/sandals', text: 'sandals' },
    { href: 'category/women/handbad', text: 'handbag' },
    { href: 'category/women/clutech', text: 'clutch' },
    { href: 'category/women/necklace', text: 'necklace' }
  ]; 

  const Men = [
    { href: 'category/men/shirt', text: 'shirt' },
    { href: 'category/men/t-shirt', text: 't-shirt' },
    { href: 'category/men/polo', text: 'polo' },
    { href: 'category/men/sweater', text: 'sweater' },
    { href: 'category/men/hoodie', text: 'hoodie' },
    { href: 'category/men/jacket', text: 'jacket' },
    { href: 'category/men/coat', text: 'coat' },
    { href: 'category/men/blazer', text: 'blazer' },
    { href: 'category/men/pants', text: 'pants' },
    { href: 'category/men/jeans', text: 'jeans' },
    { href: 'category/men/shorts', text: 'shorts' },
    { href: 'category/men/sweatpants', text: 'sweatpants' },
    { href: 'category/men/suits', text: 'suits' },
    { href: 'category/men/tie', text: 'tie' },
    { href: 'category/men/bowtie', text: 'bowtie' },
    { href: 'category/men/belt', text: 'belt' },
    { href: 'category/men/socks', text: 'socks' },
    { href: 'category/men/shoes', text: 'shoes' },
    { href: 'category/men/sneaker', text: 'sneakers' },
    { href: 'category/men/loafers', text: 'loafers' },
    { href: 'category/men/boots', text: 'boots' }
  ];
  
  const links = [
    { href: 'category/Electronics', text: 'Electronics' },
    { href: 'category/Home & Lifestyle', text: 'Home & Lifestyle' },
    { href: 'category/Medicine', text: 'Medicine' },
    { href: 'category/Sport & Outdoor', text: 'Sport & Outdoor' },
    { href: 'category/Babys & Toys', text: "Baby's & Toys" },
    { href: 'category/Groceries & Pets', text: 'Groceries & Pets' },
    { href: 'category/Health & Beauty', text: 'Health & Beauty' },
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
