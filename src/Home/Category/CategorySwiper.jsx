import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CameraIcon from './icons/CameraIcon'; 
import ComputerIcon from './icons/ComputerIcon';
import HeadPhonesIcon from './icons/HeadPhonesIcon';
import WatchIcon from './icons/WatchIcon';
import PhoneIcon from './icons/PhoneIcon';

const CategorySwiper = () => {
  const data = [
    { title: "Camera", icon: <CameraIcon/> },
    { title: "Computers", icon: <ComputerIcon/> },
    { title: "Games", icon: <CameraIcon/> },
    { title: "Headphones", icon: <HeadPhonesIcon /> },
    { title: "Watchs", icon: <WatchIcon/> },
    { title: "Phones", icon: <PhoneIcon/> }
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 3,  
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,  
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='mx-16 mt-24'>
        <div className="flex items-center gap-3 text-red-600">
          <div className="h-10 w-5 bg-red-600 rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
          <h2 className="text-xl font-bold capitalize">categories</h2>
        </div>      
          <div className='mt-7 mb-14'>
            <h2 className="text-3xl font-semibold capitalize">Browse by category</h2>
          </div>
        <div className='w-12/12 md:w-12/12 px-2 md:px-0 mt-15 m-auto mb-16'>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-center px-4">
                <div className="relative p-6 border-2 border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-red-600 hover:border-transparent group">
                  <div className="flex items-center justify-center">
                    <div className="text-gray-800 text-xl group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>
                  <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </>
  );
}

export default CategorySwiper;
