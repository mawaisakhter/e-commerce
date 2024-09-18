import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BestSaleProduct = () => {
    const data = [
        {
            image: "../../../public/images/products/coat.webp",
            title: "the north coat",
            price: 96,
            originalPrice: 160,
            discount: "-40%",
            rating: 4,
            sale: 22
        },
        {
            image: "../../../public/images/products/bag.webp",
            title: "gucci duffle bag",
            price: 120,
            originalPrice: 200,
            discount: "-30%",
            rating: 5,
            sale: 20
        },
        {
            image: "../../../public/images/products/cpu-cooler.webp",
            title: "RGB Liaqud Cpu Cooler",
            price: 250,
            originalPrice: 300,
            discount: "-20%",
            rating: 3,
            sale: 10
        },
        {
            image: "../../../public/images/products/book-self.webp",
            title: "Small BookSlef",
            price: 80,
            originalPrice: 120,
            discount: "-33%",
            rating: 4,
            sale: 14
        }
    ];

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,   
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        // centerMode: true,  
        // centerPadding: '50px', 
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,  
                    slidesToScroll: 1,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 2,  
                    slidesToScroll: 1,
                    centerPadding: '30px', 
                }
            },
            {
                breakpoint: 640,  
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    centerPadding: '0px',
                }
            }
        ]
    };
    
    const renderStars = (rating) => {
        const totalStars = 5;
        return [...Array(totalStars)].map((_, index) => (
            <svg 
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.502h4.725c.969 0 1.371 1.24.588 1.81l-3.822 2.773 1.462 4.502c.3.921-.755 1.688-1.54 1.11L10 15.347l-3.824 2.773c-.784.579-1.838-.189-1.54-1.11l1.462-4.502-3.822-2.773c-.783-.57-.38-1.81.588-1.81h4.725L9.05 2.927z" />
            </svg>
        ));
    };

    return (
        <>
            <div className='mx-16 mt-24'>
                <div className="flex items-center gap-3 text-red-600">
                    <div className="h-10 w-5 bg-red-600  rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
                    <h2 className="text-lg font-bold capitalize">this month</h2>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className="text-2xl md:text-3xl mt-3 font-semibold capitalize">best selling products</h2>
                    <div className="flex items-center">
                        <Link to="#" className="text-white bg-red-700 hover:bg-red-800 md:font-medium text-sm md:text-md px-5 py-2.5 me-2 mb-2">View All</Link>
                    </div>
                </div>        
                <div className='w-full px-2 md:px-0 mt-10 m-auto mb-16'>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} style={{ width: '290.889px', marginRight: '50px' }}>
                                <div className="flex flex-col items-start gap-3 group">
                                    <div className="p-12 px-10 flex items-center justify-center relative bg-gray-300 cursor-default">
                                        <img alt={item.title} loading="lazy" width="200" height="200" decoding="async" className="w-36 h-36 object-contain max-2xl:w-28 max-2xl:h-28" src={item.image}/>
                                        <button className="flex items-center justify-center px-12 rounded-sm text-white capitalize text-lg text-center max-3xl:px-8 max-3xl:py-3 absolute bottom-0 w-full py-2 bg-black hover:bg-color-bg-1 group-hover:flex transition-all duration-300 ease-in-out rounded-tr-none rounded-tl-none max-2xl:text-base max-2xl:py-1 max-2xl:px-2 max-3xl:h-9 font-semibold">add to cart</button>
                                        <div className="w-10 h-10 absolute top-2 right-3 cursor-pointer bg-white rounded-full flex items-center justify-center">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className=" w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                                            </svg>
                                        </div>
                                        <div className="absolute top-2 left-2 flex text-center gap-2 ">
                                            <p className="uppercase text-color-text-1 rounded-md bg-red-600 text-white px-2 py-1 text-base">{item.discount}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-1">
                                        <p className="text-lg text-gray-800 font-semibold max-2xl:text-base">{item.title}</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-lg max-2xl:text-base font-semibold text-red-600">${item.price}</p>
                                            <p className="text-gray-500 line-through text-lg font-semibold max-2xl:text-base">${item.originalPrice}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1">
                                                {renderStars(item.rating)}
                                            </div>
                                            <p className="font-semibold">({item.sale})</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default BestSaleProduct;
