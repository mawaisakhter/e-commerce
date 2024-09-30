import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from '../../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
      <div className="p-8">
        <div className="w-full">
          <table className="min-w-full gap-y-8">
            <thead className='overflow-hidden rounded-lg shadow-lg'>
              <tr className="w-full">
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Product</th>
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Price</th>
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Quantity</th>
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Subtotal</th>
              </tr>
            </thead>
            <tbody className='overflow-hidden rounded-lg shadow-lg'>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">
                    <div className="flex items-center">
                      <img className="w-16 h-16 object-cover" src={item.image} alt={item.name} />
                      <span className="ml-4">{item.title}</span>
                    </div>
                  </td>
                  <td className="p-3">${item.price}</td>
                  <td className="p-3">
                    <input type="number" min="1" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e)}className="w-16 px-2 py-1"/>
                  </td>
                  <td className="p-3">${item.price * item.quantity}</td>
                  <td className="p-3">
                    <svg onClick={() => handleRemove(item.id)} className='text-red-500 hover:text-red-700'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 mt-20'>
          <div className="mt-4 md:col-span-5">
            <input type="text" placeholder="Coupon Code" className="p-2 border rounded-md w-60 md:w-72"/>
            <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Apply Coupon</button>
          </div>
          <div className='col-span-3'>
          </div>
          <div className="mt-10 md:mt-0 col-span-4">
            <div className="border p-4 rounded-md">
                <h2 className="text-lg font-bold mb-4">Cart Total</h2>
                <div className="flex justify-between">
                  <div>Subtotal:</div>
                  <div>${calculateTotal()}</div>
                </div>
                <div className="flex justify-between">
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>
                <div className="flex justify-between mt-2 font-bold">
                  <div>Total:</div>
                  <div>${calculateTotal()}</div>
                </div>
                <button className="w-full mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Process to Checkout
                </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cart;
