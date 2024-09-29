import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    // {
    //   id: 1,
    //   name: 'CANON EOS DSLR Camera',
    //   price: 360,
    //   image: 'https://path/to/camera/image.jpg',
    //   quantity: 3,
    // },
    // {
    //   id: 2,
    //   name: 'CANON EOS DSLR Camera',
    //   price: 260,
    //   image: 'https://path/to/camera/image.jpg',
    //   quantity: 3,
    // },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find(item => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; 
        } else {
          state.items = state.items.filter(item => item.id !== action.payload); 
        }
      }
    },
  },
});

export const { addToCart, updateQuantity, removeItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
