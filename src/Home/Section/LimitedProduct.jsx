import React from 'react';
import CountdownTimer2 from '../Timer/CountdownTimer2';

const LimitedProduct = () => {
  const targetDate = new Date("2024-12-31T23:59:59").getTime(); 

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-black text-white py-24 px-6 lg:px-16 mx-4 lg:mx-16">
      <div className="flex flex-col space-y-6 text-center lg:text-left">
        <p className="text-green-500 font-semibold text-lg">Categories</p>
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          Enhance Your Music Experience
        </h1>
        <CountdownTimer2 targetDate={targetDate} />
        <button className="w-72 mx-auto  md:mx-0 lg:w-28 bg-[#00FF66] text-white py-3 font-bold rounded-sm">
          Buy Now
        </button>
      </div>

      <div className="mt-8 lg:mt-0 flex justify-center lg:pr-32">
        <img src="../../public/images/home/banner-1.webp" alt="Speaker" className="w-80 lg:w-80 h-auto object-contain"/>
      </div>
    </div>
  );
};

export default LimitedProduct;
