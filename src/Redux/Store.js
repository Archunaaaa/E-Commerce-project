// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './CartSlice';

// const rootReducer = {
//   cart: cartReducer,
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
