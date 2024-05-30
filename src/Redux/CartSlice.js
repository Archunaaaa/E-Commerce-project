import { createSlice } from '@reduxjs/toolkit';

const storeInLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: JSON.parse(localStorage.getItem('cart')) || [],
    totalItems: 0,
    totalAmount: 0,
    deliverCharge: 10,
  },
  reducers: {
    addToCart(state, action) {
      const existingProductIndex = state.data.findIndex((product) => product.id === action.payload.id);

      if (existingProductIndex !== -1) {
        const existingProduct = state.data[existingProductIndex];
        const newQuantity = existingProduct.quantity + action.payload.quantity;
        const updatedProduct = {
          ...existingProduct,
          quantity: newQuantity,
          totalPrice: newQuantity * existingProduct.price,
        };
        state.data.splice(existingProductIndex, 1, updatedProduct);
      } else {
        state.data.push({ ...action.payload, totalPrice: action.payload.quantity * action.payload.price });
      }
      storeInLocalStorage(state.data);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const productToUpdate = state.data.find((product) => product.id === id);

      if (productToUpdate) {
        const validQuantity = Math.max(quantity || 1, 1);
        productToUpdate.quantity = validQuantity;
        productToUpdate.totalPrice = productToUpdate.price * validQuantity; // Update totalPrice based on the new quantity
      }
      storeInLocalStorage(state.data);
    },

    removeItem(state, action) {
      const productIdToRemove = action.payload.id;
      state.data = state.data.filter((product) => product.id !== productIdToRemove);
      storeInLocalStorage(state.data);
    },

    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => cartTotal + cartItem.totalPrice, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, removeItem, getCartTotal, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
