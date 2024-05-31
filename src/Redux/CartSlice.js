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
    deliveryCharge: 10,
  },
  reducers: {
    addToCart(state, action) {
      const existingProductIndex = state.data.findIndex(product => product.id === action.payload.id);

      if (existingProductIndex !== -1) {
        const existingProduct = state.data[existingProductIndex];
        const newQuantity = existingProduct.quantity + action.payload.quantity;
        state.data[existingProductIndex] = {
          ...existingProduct,
          quantity: newQuantity,
          totalPrice: newQuantity * existingProduct.price,
        };
      } else {
        state.data.push({
          ...action.payload,
          quantity: action.payload.quantity,
          totalPrice: action.payload.quantity * action.payload.price,
        });
      }
      storeInLocalStorage(state.data);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.data.find(product => product.id === id);

      if (product) {
        product.quantity = quantity;
        product.totalPrice = product.price * quantity;
      }
      storeInLocalStorage(state.data);
    },
    removeItem(state, action) {
      state.data = state.data.filter(product => product.id !== action.payload.id);
      storeInLocalStorage(state.data);
    },
    getCartTotal(state) {
      state.totalAmount = state.data.reduce((total, product) => total + product.totalPrice, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
