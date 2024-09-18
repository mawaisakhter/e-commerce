import React from 'react';
import StatsCards from './StatsCards';
import TeamSlider from './TeamSlider';
import ServiceSection from '../../Home/Section/ServiceSection';

const About = () => {
  return (
    <>
      <div className='mx-4 sm:mx-8 mb-20 sm:mb-40'>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-12 mb-12 md:mb-20">
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Our Story</h1>
            <p className='mt-8 text-base sm:text-lg md:text-lg text-justify'>
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <p className='mt-4 sm:mt-8 text-base sm:text-lg md:text-lg text-justify'>
              Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <img 
              src="/images/about/girls.webp" 
              alt="Girls" 
              className='w-full h-auto object-cover rounded-lg'
            />
          </div>
        </div>
        <StatsCards/>
        <TeamSlider/>
        <div className='mt-8 -mb-20'> 
          <ServiceSection/>
        </div>
      </div>
    </>
  );
}

export default About;
