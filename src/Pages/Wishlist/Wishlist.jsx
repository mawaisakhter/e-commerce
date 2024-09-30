import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/cartSlice';
import { addItemToWishlist, removeItemFromWishlist } from '../../features/wishlistSlice';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemFromWishlist(id));
  };

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

  // const { category } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 px-4 md:px-28">
          {wishlistItems.map((product) => {
            const isInWishlist = wishlist.some((item) => item.id === product.id);
            const cartItem = cartItems.find(item => item.id === product.id); 
              return (
                <div key={product.id}>
                  <div className="p-12 px-10 flex items-center justify-center relative bg-gray-300 cursor-default">
                    <img alt={product.title} loading="lazy" width="200" height="200" decoding="async" className="w-36 h-36 object-contain" src={product.image} />
                      {cartItem ? (
                        <div className="bg-black absolute bottom-0 w-full flex items-center justify-center">
                          <button className="px-2 py-1 text-white text-3xl" onClick={() => handleRemoveFromCart(product)}>
                            -
                          </button>
                          <span className="font-semibold mx-2 text-white">{cartItem.quantity}</span>
                          <button className="px-2 py-1 text-white text-3xl" onClick={() => handleAddToCart(product)}>
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
      )}
    </div>
  );
};

export default Wishlist;
