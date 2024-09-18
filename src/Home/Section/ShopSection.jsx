import React from 'react';

const ShopSection = () => {
  return (
    <>
      <div className='mx-16 mt-5'>
        <div className="flex items-center gap-3 text-red-600">
          <div className="h-10 w-5 bg-red-600  rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
            <h2 className="text-lg font-bold capitalize">featured</h2>
        </div>
        <div className='flex items-center justify-between'>
          <h2 className="text-3xl mt-5 mb-3 font-semibold capitalize">new arrival</h2>
        </div>  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 p-6 px-16">
        <div className="md:col-span-6 md:row-span-2 relative bg-black shadow-md overflow-hidden h-[490px]"> 
          <img src="../../public/images/home/ps5.webp" alt="PlayStation 5" className="w-5/6  mx-auto"/>
          <div className="absolute bottom-3 left-6 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h2 className="text-3xl font-semibold">PlayStation 5</h2>
            <p className="text-base font-normal mt-2">Black and White version of PS5 coming out on sale</p>
            <a href="#" className="inline-block mt-3 font-medium underline">Shop Now</a>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative bg-black shadow-md overflow-hidden h-56 flex items-center">
            <img src="../../public/images/home/girl-with-hat.webp" alt="Women's Collections" className="w-48 h-56 object-cover opacity-50 ml-auto"/>
            <div className="absolute bottom-3 left-2 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
              <h2 className="text-3xl font-semibold">Women's Collections</h2>
              <p className="text-base font-normal mt-1">Featured woman collections that give you another vibe</p>
              <a href="#" className="inline-block mt-2 font-medium underline">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative bg-black shadow-md overflow-hidden flex items-center h-56"> 
              <img src="../../public/images/home/speakers.webp" alt="Speakers" className="w-40 mx-auto"/>
              <div className="absolute bottom-3 left-4 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                <h2 className="text-2xl font-semibold">Speakers</h2>
                <p className="text-base font-normal mt-1">Amazon wireless speakers</p>
                <a href="#" className="inline-block mt-2 font-medium underline">Shop Now</a>
              </div>
            </div>
            <div className="relative bg-black shadow-md overflow-hidden flex items-center h-56"> 
              <img src="../../public/images/home/perfume.webp" alt="Perfume"className="w-40 mx-auto"/>
              <div className="absolute bottom-3 left-2 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                <h2 className="text-2xl font-semibold">Perfume</h2>
                <p className="text-base font-normal mt-1">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="inline-block mt-2 font-medium underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
