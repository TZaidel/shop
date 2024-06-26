import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/UserSlice';
import productReducer from './products/productsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});
