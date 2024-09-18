import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    "../../public/images/home/banner.webp",
    "../../public/images/home/banner.webp",
    "../../public/images/home/banner.webp"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000); 
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full md:w-9/10 mx-0 md:mx-auto mt-10 overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}/>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
