import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../features/cartSlice';
import { addItemToWishlist, removeItemFromWishlist } from '../../../features/wishlistSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items); 
  const cartItems = useSelector((state) => state.cart.items); 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeItemFromWishlist(product.id)); 
    } else {
      dispatch(addItemToWishlist(product)); 
    }
  };

  const { category } = useParams();
  const products = [
    {
      id: 1,
      image: "../../../public/images/products/coat.webp",
      title: "the north coat",
      price: 96,
      originalPrice: 160,
      discount: "-40%"
    },
    {
      id: 2,
      image: "../../../public/images/products/bag.webp",
      title: "gucci duffle bag",
      price: 120,
      originalPrice: 200,
      discount: "-30%"
    },
    {
      id: 3,
      image: "../../../public/images/products/cpu-cooler.webp",
      title: "RGB Liaqud Cpu Cooler",
      price: 250,
      originalPrice: 300,
      discount: "-20%"
    },
    {
      id: 4,
      image: "../../../public/images/products/book-self.webp",
      title: "Small BookSlef",
      price: 80,
      originalPrice: 120,
      discount: "-33%"
    },
    {
      id: 5,
      image: "../../../public/images/products/coat.webp",
      title: "the north coat",
      price: 96,
      originalPrice: 160,
      discount: "-40%"
    },
    {
      id: 6,
      image: "../../../public/images/products/bag.webp",
      title: "gucci duffle bag",
      price: 120,
      originalPrice: 200,
      discount: "-30%"
    },
    {
      id: 7,
      image: "../../../public/images/products/cpu-cooler.webp",
      title: "RGB Liaqud Cpu Cooler",
      price: 250,
      originalPrice: 300,
      discount: "-20%"
    },
    {
      id: 8,
      image: "../../../public/images/products/book-self.webp",
      title: "Small BookSlef",
      price: 80,
      originalPrice: 120,
      discount: "-33%"
    },
    {
      id: 9,
      image: "../../../public/images/products/coat.webp",
      title: "the north coat",
      price: 96,
      originalPrice: 160,
      discount: "-40%"
    },
    { 
      id: 10,
      image: "../../../public/images/products/bag.webp",
      title: "gucci duffle bag",
      price: 120,
      originalPrice: 200,
      discount: "-30%"
    },
    {
      id: 11,
      image: "../../../public/images/products/cpu-cooler.webp",
      title: "RGB Liaqud Cpu Cooler",
      price: 250,
      originalPrice: 300,
      discount: "-20%"
    },
    {
      id: 12,
      image: "../../../public/images/products/book-self.webp",
      title: "Small BookSlef",
      price: 80,
      originalPrice: 120,
      discount: "-33%"
    },
    {
      id: 13,
      image: "../../../public/images/products/coat.webp",
      title: "the north coat",
      price: 96,
      originalPrice: 160,
      discount: "-40%"
    },
    { 
      id: 14,
      image: "../../../public/images/products/bag.webp",
      title: "gucci duffle bag",
      price: 120,
      originalPrice: 200,
      discount: "-30%"
    },
    {
      id: 15,
      image: "../../../public/images/products/cpu-cooler.webp",
      title: "RGB Liaqud Cpu Cooler",
      price: 250,
      originalPrice: 300,
      discount: "-20%"
    },
    {
      id: 16,
      image: "../../../public/images/products/book-self.webp",
      title: "Small BookSlef",
      price: 80,
      originalPrice: 120,
      discount: "-33%"
    },
    {
      id: 17,
      image: "../../../public/images/products/coat.webp",
      title: "the north coat",
      price: 96,
      originalPrice: 160,
      discount: "-40%"
    },
    {
      id: 18,
      image: "../../../public/images/products/bag.webp",
      title: "gucci duffle bag",
      price: 120,
      originalPrice: 200,
      discount: "-30%"
    },
    {
      id: 19,
      image: "../../../public/images/products/cpu-cooler.webp",
      title: "RGB Liaqud Cpu Cooler",
      price: 250,
      originalPrice: 300,
      discount: "-20%"
    },
    {
      id: 20,
      image: "../../../public/images/products/book-self.webp",
      title: "Small BookSlef",
      price: 80,
      originalPrice: 120,
      discount: "-33%"
    },
  ];
  
  const [visibleCount, setVisibleCount] = useState(8);
  const incrementCount = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, products.length)); 
  };

  return (
    <div>
      <nav className="flex my-10 ms-10" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-600 ">
              <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className=" w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ms-1 text-base font-medium text-gray-500 md:ms-2 ">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 px-4 md:px-28">
        {products.slice(0, visibleCount).map((product) => {
          const isInWishlist = wishlist.some((item) => item.id === product.id);
          const cartItem = cartItems.find(item => item.id === product.id); 
          return (
            <div key={product.id}>
              <div className="p-12 px-10 flex items-center justify-center relative bg-gray-300 cursor-default">
                <img alt={product.title} loading="lazy" width="200" height="200" decoding="async" className="w-36 h-36 object-contain" src={product.image} />
                
                {cartItem ? (
                  <div className="bg-black absolute bottom-0 w-full flex items-center justify-center">
                    <button className="px-2 py-1 text-white text-3xl"
                      onClick={() => handleRemoveFromCart(product)}>
                      -
                    </button>
                    <span className="font-semibold mx-2 text-white">{cartItem.quantity}</span>
                    <button className="px-2 py-1 text-white text-3xl"
                      onClick={() => handleAddToCart(product)}>
                      +
                    </button>
                  </div>
                ) : (
                  <button className="flex items-center justify-center px-12 rounded-sm text-white capitalize text-lg text-center bg-black hover:bg-red-600 absolute bottom-0 w-full py-2 font-semibold"
                    onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                )}
                
                <div className="w-10 h-10 absolute top-2 right-3 cursor-pointer bg-white rounded-full flex items-center justify-center"
                  onClick={() => toggleWishlist(product)}>
                  <svg stroke="currentColor" fill={isInWishlist ? "red" : "black"} strokeWidth="0" viewBox="0 0 256 256" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                  </svg>
                </div>
                <div className="absolute top-2 left-2 flex text-center gap-2">
                  <p className="uppercase text-white bg-red-600 px-2 py-1">{product.discount}</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-base text-gray-800 mt-2 font-semibold">{product.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-red-600">${product.price}</p>
                  <p className="text-gray-500 line-through text-base">${product.originalPrice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='text-center my-10'>
        {visibleCount < products.length && (
          <button className="text-white  bg-red-700 hover:bg-red-800 md:font-medium text-sm md:text-md px-5 py-2.5 me-2 mb-2" onClick={incrementCount}>View More Products</button>
        )}          
      </div>
    </div>
  );
};

export default CategoryPage;

