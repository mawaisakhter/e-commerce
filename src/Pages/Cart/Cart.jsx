import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './features/cartSlice';

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
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full">
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Product</th>
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Price</th>
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Quantity</th>
                <th className="p-3 text-left text-sm font-semibold uppercase tracking-wide">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">
                    <div className="flex items-center">
                      <img className="w-16 h-16 object-cover" src={item.image} alt={item.name} />
                      <span className="ml-4">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-3">${item.price}</td>
                  <td className="p-3">
                    <input type="number" min="1" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e)}className="w-16 px-2 py-1"/>
                  </td>
                  <td className="p-3">${item.price * item.quantity}</td>
                  <td className="p-3">
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
            <input type="text" placeholder="Coupon Code" className="p-2 border rounded-md w-60"/>
            <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Apply Coupon</button>
        </div>
        <div className="mt-8 flex justify-end">
            <div className="w-1/4 border p-4 rounded-md">
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
  );
};

export default Cart;
